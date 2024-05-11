<template>
  <button
    class="cs-button"
    :class="{
      [`cs-button--${type}`]: type,
      [`cs-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'

defineOptions({
  name: 'cs-button'
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})
</script>

<style scoped></style>
