<script setup lang="ts">
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

<style scoped lang="scss">
  .buttonLayoutItem {
    min-width: 240px;
  }
</style>
