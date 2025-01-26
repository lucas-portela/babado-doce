<template>
  <div v-if="modelValue" class="prompt-modal-component">
    <div class="modal q-px-lg q-pt-lg q-pb-md">
      <div class="message">{{ message }}</div>
      <textarea
        class="input q-mt-md q-mb-sm"
        rows="4"
        v-model="input"
      ></textarea>
      <div class="btn-ready" @click="done()"></div>
    </div>
  </div>
</template>

<style lang="scss">
.prompt-modal-component {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 10001;
  background-color: rgba(255, 255, 255, 0.84);
  .message {
    text-align: center;
  }
  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90%;
    max-width: 400px;
    transform: translate(-50%, -50%);
    border-image-slice: 50 50 53 53 fill;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-image-source: url(../assets/images/bg-modal.png);
  }
  .input {
    width: 100%;
    border: none;
    background-color: #f2f2f2;
  }
  .btn-ready {
    height: 8vh;
    width: 100%;
    background-image: url(../assets/images/btn-ready.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{ message: string; modelValue: boolean }>();
const emit = defineEmits(['update:modelValue', 'done']);
const input = ref<string>();

const done = () => {
  emit('update:modelValue', false);
  emit('done', input.value);
};

watchEffect(() => {
  if (props.modelValue == true) input.value = '';
});
</script>
