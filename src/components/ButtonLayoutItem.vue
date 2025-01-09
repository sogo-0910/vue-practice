<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    tag: {
      type: String,
      default: 'div',
      validator: (value: string) => ['div', 'li'].includes(value),
    },
  })
</script>

<template>
  <component :is="tag" class="buttonLayoutItem">
    <slot />
  </component>
</template>

<style scoped>
  .buttonLayoutItem {
    min-width: 240px;
  }
</style>
