<template>
  <q-page class="index-page">
    <div v-if="!started" class="wrapper column justify-evenly q-px-lg q-pt-lg">
      <div class="game-title col-auto animate__animated animate__bounceInDown">
        <div class="sprite"></div>
      </div>
      <div
        class="btn-start col-auto animate__animated animate__pulse animate__infinite"
      >
        <div
          class="sprite animate__animated animate__bounceInRight"
          @click="start()"
        ></div>
      </div>
      <div class="flork col animate__animated animate__flipInY"></div>
    </div>
    <div class="watermark"></div>
    <prompt-modal-component
      v-model="promptModal"
      :message="promptMessage ?? ''"
      @done="promptResolve"
    />
    <pass-phone-wall-component
      v-model="passPhonePlayer"
      @done="passPhoneResolve"
      :keep-open="passPhoneKeepOpen"
    />
    <challenge-component
      v-model="challengeMessage"
      :player="challengePlayer"
      @done="challengeResolve"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PromptModalComponent from '../components/PromptModalComponent.vue';
import PassPhoneWallComponent from '../components/PassPhoneWallComponent.vue';
import ChallengeComponent from '../components/ChallengeComponent.vue';
import axios from 'axios';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const started = ref<boolean>(false);
const promptMessage = ref<string>();
const promptModal = ref<boolean>(false);
const promptResolve = ref<(input: string) => void>();

const passPhonePlayer = ref<string>();
const passPhoneKeepOpen = ref<boolean>();
const passPhoneResolve = ref<() => void>();

const challengeMessage = ref<string>();
const challengePlayer = ref<string>();
const challengeResolve = ref<() => void>();

type Challenge = { player: string; challenge: string };
const KEY_STORAGE = 'openapi-key';

const askSecretMessages = [
  (player: string) => `Bora ${player}, me conta uma boa fofoca:`,
  (player: string) => `Sua vez de fofocar, ${player}:`,
  (player: string) => `Bota a fofoca pra fora, ${player}:`,
  (player: string) => `Conta pá nóis una fofoquita, ${player}:`,
  (player: string) => `Hey ${player}, que fofocas tú tem?`,
  (player: string) => `Sou todo ouvidos ${player}, manda a braba:`,
];

const getChallenges = async (
  players: string[],
  secrets: string[]
): Promise<Challenge[]> => {
  $q.loading.show({
    message: 'Calma um tico que tô criando desafios...',
    spinnerColor: 'black',
    messageColor: 'black',
    backgroundColor: 'white',
  });

  let challenges: Challenge[] = [];

  try {
    let key = localStorage.getItem(KEY_STORAGE);

    const gptPrompt =
      'Você é um jogo de desafios que a cada prompt dá apenas uma carta, ' +
      'cada carta tem dois desafios e cada jogador vai receber uma carta por vez na ordem ' +
      'que forem mencionados. Um dos desafios, o desafio A, é pessoal e será elaborado de ' +
      'uma forma que o jogador faça sozinho ou que cause uma interação/flerte rápida entre ' +
      'dois jogadores. O outro desafio, o desafio B, é uma opção caso o jogador não queira ' +
      'fazer o desafio A. O Desafio B será "beba x doses" sendo x a quantidade de doses ' +
      'entre 1 e 5 que o jogador deverá beber. Antes de o jogo começar você receberá uma ' +
      'lista de jogadores e um segredo sobre cada jogador e usará essas informações para ' +
      'deixar o desafio interessante. O desafio A deve ser engraçado mas fácil de fazer ' +
      'e sempre precisam ser possíveis de serem executados num ambiente de barzinho. ' +
      'Tente não ser muito repetitivo nas perguntas, use os segredos para criar os desafios.' +
      'Se não houver segredo sobre um jogador, crie para ele desafios que incentivem a interação com outros jogadores e seus segredos. ' +
      'crie desafios que incentivem a interação com outros jogadores que tem segredos. ' +
      'Quando usar o segredo de uma pessoa no desafio de outra, não deixe esplícito o motivo.' +
      `Os jogadores são: ${players.join(', ')}. os segredos são:\n${secrets
        .map((x) => '- ' + x)
        .join(
          '\n'
        )}\n\nSua resposta deverá vir resumida e exatamente na forma:\n\n- nome do jogador: <desafio A> ou <Desafio B>.\n\nExemplo:\n- João: dançar kpop ou beber 2 doses\n\nEm cada rodada deverão ser criadas cartas para cada jogador na ordem ${players.join(
        ', '
      )}. Não separe as rodadas com um título, todas as perguntas do jogo devem estar na mesma lista. Gere 5 rodadas de jogo abaixo, respeitando a sequencia de jogadores.`;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini-2024-07-18',
        messages: [{ role: 'user', content: gptPrompt }],
        temperature: 1,
        top_p: 1,
        frequency_penalty: 0.46,
        presence_penalty: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      }
    );

    const generated = response.data.choices[0].message.content.trim();
    //     const generated = `1. Lucas: Falar algo bem engraçado para Yasmim ou beber 1 dose
    // 2. Levy: Criar um emojy para zoar Yago ou beber 2 doses
    // 3. Yasmim: Apresentar-se para o Gabriel Alves ou beber 1 dose
    // 4. Yago: Contar uma piada para todos os jogadores ou beber 3 doses
    // 5. Gabriel Alves: Mandar um elogio para Yasmim ou beber 1 dose
    // 6. Lucas: Se declarar para Yasmim ou beber 3 doses
    // 7. Levy: Tirar uma foto engraçada com Yago ou beber 5 doses
    // 8. Yasmim: Perguntar ao Gabriel Alves o que ele gosta de fazer nos fins de semana ou beber 2 doses
    // 9. Yago: Cantar algo para fazer todo mundo rir ou beber 4 doses
    // 10. Gabriel Alves: Escrever uma carta para Yasmim ou beber 2 doses`;

    console.log(generated);
    challenges = generated
      .split('\n')
      .map((x: string) =>
        x
          .replace(/(=>|->|-|\*)/g, '')
          .replace(/^\d+(\.|,)*/, '')
          .replace(/;$/, '')
          .trim()
          .match(/([^:]+):(.+)/)
      )
      .map((x: string) => {
        if (!x) {
          return { player: '--', challenge: '--' };
        }
        return { player: x[1], challenge: x[2] };
      })
      .filter(
        ({ player, challenge }: { player: string; challenge: string }) =>
          player != '--' || challenge != '--'
      );

    console.log(challenges);
  } catch (e) {
    localStorage.removeItem(KEY_STORAGE);
    console.log(e);
    alert('Ocorreu um erro!');
  }
  $q.loading.hide();
  return challenges;
};

const getPrompt = async (message: string): Promise<string> => {
  promptMessage.value = message;
  promptModal.value = true;
  const result = await new Promise<string>((resolve) => {
    promptResolve.value = resolve;
  });
  return result;
};

const passPhone = async (player: string, keepOpen = false): Promise<void> => {
  passPhonePlayer.value = player;
  passPhoneKeepOpen.value = keepOpen;
  await new Promise<void>((resolve) => {
    passPhoneResolve.value = resolve;
  });
};

const showChallenge = async (
  message: string,
  player: string
): Promise<void> => {
  challengeMessage.value = message;
  challengePlayer.value = player;
  await new Promise<void>((resolve) => {
    challengeResolve.value = resolve;
  });
};

const start = async () => {
  let key = localStorage.getItem(KEY_STORAGE);
  while (!key) {
    key = await getPrompt(
      'Para que o jogo funcione, informe a chave de API do OpenAI:'
    );
    localStorage.setItem(KEY_STORAGE, key ?? '');
  }

  const secrets = [
    // 'Lucas gosta da Yasmim',
    // 'Levy quer zoar o yago',
    // 'Yasmim está afim do gabriel Alves',
    // 'Yago curte fazer todo mundo sorrir',
    // 'Gabriel Alves é tímido',
  ];
  // const players = ['Lucas', 'Levy', 'Yasmim', 'Yago', 'Gabriel Alves'];
  const players = (await getPrompt('Põe aí o nome do povo:'))
    .toLowerCase()
    .replace(/ e /g, ',')
    .replace(/\./g, ',')
    .replace(/\s*,\s*/g, ',')
    .replace(/\,$/g, '')
    .trim()
    .split(',');

  started.value = true;

  for (const player of players) {
    await passPhone(player, true);
    const secret = await getPrompt(
      askSecretMessages[Math.floor(Math.random() * askSecretMessages.length)](
        player
      )
    );
    secrets.push(secret);
    passPhonePlayer.value = undefined;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  while (true) {
    const challenges = await getChallenges(players, secrets);

    for (const { player, challenge } of challenges) {
      await passPhone(player);
      await showChallenge(challenge, player);
    }
  }
};
</script>

<style lang="scss">
.index-page {
  background-color: white;
  > .wrapper {
    background-color: white;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    > .game-title {
      padding: 5vh 0vh;
      .sprite {
        height: 20vh;
        width: 100%;
        background-image: url(../assets/images/game-title.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    > .btn-start {
      padding-bottom: 5vh;
      .sprite {
        height: 15vh;
        width: 100%;
        background-image: url(../assets/images/btn-start.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    > .flork {
      animation-delay: 0.8s;
      padding-top: 5vh;
      background-image: url(../assets/images/flork1.png);
      background-size: contain;
      background-position: center bottom;
      background-repeat: no-repeat;
    }
  }

  > .watermark {
    position: fixed;
    opacity: 0.8;
    width: 40vw;
    height: 40vw;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(/icons/icon.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
  }
}
</style>
