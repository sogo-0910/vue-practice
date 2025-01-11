<script setup lang="ts">
  interface Props {
    isActive: boolean
  }
  const { isActive } = defineProps<Props>()
</script>

<template>
  <button type="button" class="menu" :class="{ 'is-active': isActive }">
    <span class="line">menu</span>
  </button>
</template>

<style scoped lang="scss">
  .menu {
    --local-position: 15px;
    position: absolute;
    top: 0;
    right: 16px;
    width: var(--HEADER-HEIGHT);
    height: var(--HEADER-HEIGHT);
    background-color: var(--COLOR-BACKGROUND-LIGHT);
    padding: var(--local-position);
    display: flex;
    align-items: center;

    &::before,
    &::after {
      position: absolute;
      display: block;
      content: '';
      width: calc(var(--HEADER-HEIGHT) - (var(--local-position) * 2));
      height: 2px;
      font-size: 0;
      background: var(--COLOR-PRIMARY);
      transition: transform var(--TRANSITION);
    }

    &::before {
      top: var(--local-position);
    }

    &::after {
      bottom: var(--local-position);
    }

    @include mixin.media(pc) {
      display: none;
    }

    &.is-active {
      &::before,
      &::after {
        inset: 0;
        margin: auto;
      }
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(45deg);
      }

      .line {
        opacity: 0;
      }
    }

    .line {
      font-size: 0;
      position: relative;
      width: 100%;
      height: 2px;
      background-color: var(--COLOR-PRIMARY);
    }
  }
</style>
