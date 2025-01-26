<template>
  <div
    v-if="modelValue"
    class="challenge-component column justify-evenly q-px-lg q-pt-lg animate__animated animate__bounceIn"
  >
    <div
      class="btn-done col-auto animate__animated animate__pulse animate__infinite"
    >
      <div
        class="sprite animate__animated animate__bounceInRight"
        @click="done()"
      ></div>
    </div>
    <div class="title col-auto">Teu Desafio, {{ player }}:</div>
    <div class="message col-auto animate__animated animate__fadeIn">
      <div>{{ modelValue }}</div>
    </div>

    <div class="flork col animate__animated animate__shakeY"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string;
  keepOpen?: boolean;
  player?: string;
}>();
const emit = defineEmits(['update:modelValue', 'done']);

const done = () => {
  emit('done');
  if (props.keepOpen !== true) emit('update:modelValue', undefined);
};
</script>

<style lang="scss">
.challenge-component {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: white;
  .title {
    text-align: center;
    font-size: 1.5em;
    padding: 0vh 5vh;
  }
  .message {
    text-align: center;
    width: 100%;
    div {
      display: inline-block;
      text-align: center;
      font-size: 1.2em;
      color: rgba(0, 0, 0, 0.7);
      padding: 5vh;
      max-width: 400px;
      border-image-slice: 78 93 72 91 fill;
      border-image-width: 20px 20px 20px 20px;
      border-image-outset: 0px 0px 0px 0px;
      border-image-repeat: stretch stretch;
      border-image-source: url(../assets/images/bg-challenge.png);
    }
  }
  .btn-done {
    padding: 5vh 0vh;
    .sprite {
      height: 12vh;
      width: 100%;
      background-image: url(../assets/images/btn-done.png);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .flork {
    animation-delay: 0.8s;
    padding-top: 5vh;
    background-image: url(../assets/images/flork3.png);
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
}
</style>
