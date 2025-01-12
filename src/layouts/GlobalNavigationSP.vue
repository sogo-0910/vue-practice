<script setup lang="ts">
  import NavigationHeader from '@/layouts/NavigationHeader.vue'
</script>

<template>
  <div class="globalNavigationSP">
    <NavigationHeader />
  </div>
</template>

<style scoped lang="scss">
  .globalNavigationSP {
    background-color: var(--COLOR-FOREGROUND-LIGHT);
    width: 100%;
    position: absolute;
    left: 0;
    top: var(--HEADER-HEIGHT);
    max-height: calc(100vh - var(--HEADER-HEIGHT));

    @include mixin.media(pc) {
      display: none;
    }
  }
</style>
