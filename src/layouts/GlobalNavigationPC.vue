<script setup lang="ts">
  import NavigationHeader from '@/layouts/NavigationHeader.vue'
</script>

<template>
  <div class="globalNavigationPC">
    <NavigationHeader />
  </div>
</template>

<style scoped lang="scss">
  .globalNavigationPC {
    background-color: var(--COLOR-FOREGROUND-LIGHT);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    border-radius: 1000px;

    @include mixin.media(sp) {
      display: none;
    }
  }
</style>
