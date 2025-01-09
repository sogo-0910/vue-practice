<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    tag: {
      type: String,
      default: 'div',
      validator: (value: string) => ['div', 'ul'].includes(value),
    },
  })
</script>

<template>
  <component :is="tag" class="buttonLayout">
    <slot />
  </component>
</template>

<style scoped>
  .buttonLayout {
    margin-top: var(--MARGIN-COMPONENTS-L);
    display: flex;
    gap: 40px;
    justify-content: center;
    list-style: none;
  }
</style>
