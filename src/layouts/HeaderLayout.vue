<script setup lang="ts">
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import BaseLogo from '@/layouts/BaseLogo.vue'
  import GlobalNavigation from '@/layouts/GlobalNavigation.vue'
</script>

<template>
  <header class="header">
    <SectionLayout>
      <div class="flex">
        <BaseLogo />
        <GlobalNavigation />
      </div>
    </SectionLayout>
  </header>
</template>

<style scoped lang="scss">
  .header {
    @extend %reset-margin;
    grid-area: header;
    padding: 16px 0;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
</style>
