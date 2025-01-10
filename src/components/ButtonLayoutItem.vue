<script setup lang="ts">
  import { defineProps } from 'vue'

  interface Props {
    tag?: 'div' | 'li'
  }

  const { tag = 'div' } = defineProps<Props>()
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
