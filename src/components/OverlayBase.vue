<script setup lang="ts">
  interface Props {
    isActive: boolean
  }
  const { isActive } = defineProps<Props>()
</script>

<template>
  <div class="overlay" :class="{ 'is-active': isActive }"></div>
</template>

<style scoped lang="scss">
  .overlay {
    width: 100%;
    height: calc(100vh - var(--HEADER-HEIGHT));
    position: fixed;
    top: var(--HEADER-HEIGHT);
    left: 0;
    display: block;
    background-color: var(--COLOR_OUTLINE_DARK);
    opacity: 0;
    visibility: hidden;
    transition:
      opacity var(--TRANSITION),
      visibility var(--TRANSITION);
    z-index: -1;

    &.is-active {
      opacity: 0.56;
      visibility: visible;
    }
  }
</style>
