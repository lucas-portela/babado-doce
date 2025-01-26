<template>
  <div
    v-if="modelValue"
    class="pass-phone-wall-component column justify-evenly q-px-lg q-pt-lg animate__animated animate__bounceIn"
  >
    <div
      class="btn-phone-ready col-auto animate__animated animate__pulse animate__infinite"
    >
      <div
        class="sprite animate__animated animate__bounceInRight"
        @click="done()"
      ></div>
    </div>
    <div class="message col-auto animate__animated animate__fadeIn">
      Passa o Celular Pro(a) <span>{{ modelValue }}</span>
    </div>

    <div class="flork col animate__animated animate__jello"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue?: string; keepOpen?: boolean }>();
const emit = defineEmits(['update:modelValue', 'done']);

const done = () => {
  emit('done');
  if (props.keepOpen !== true) emit('update:modelValue', undefined);
};
</script>

<style lang="scss">
.pass-phone-wall-component {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: white;
  .message {
    text-align: center;
    font-size: 1.5em;
    padding-bottom: 5vh;
    span {
      color: #fa4d8d;
    }
  }
  .btn-phone-ready {
    padding: 5vh 0vh;
    .sprite {
      height: 15vh;
      width: 100%;
      background-image: url(../assets/images/btn-phone-ready.png);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .flork {
    animation-delay: 0.8s;
    padding-top: 5vh;
    background-image: url(../assets/images/flork2.png);
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
}
</style>
