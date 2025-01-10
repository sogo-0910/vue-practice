<script setup lang="ts">
  interface Props {
    tag?: 'div' | 'ul'
  }

  const { tag = 'div' } = defineProps<Props>()
</script>

<template>
  <component :is="tag" class="buttonLayout">
    <slot />
  </component>
</template>

<style scoped lang="scss">
  .buttonLayout {
    margin-top: var(--MARGIN-COMPONENTS-L);
    display: flex;
    gap: 40px;
    justify-content: center;
    list-style: none;
  }
</style>
