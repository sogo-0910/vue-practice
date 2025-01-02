<script setup lang="ts">
  import SectionLayout from './SectionLayout.vue'
  import BaseLogo from './BaseLogo.vue'
  import GlobalNavigation from './GlobalNavigation.vue'
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

<style scoped>
  .header {
    grid-area: header;
    padding: 16px 0;
    position: sticky;
    top: 0;
    left: 0;

    > *:first-child {
      margin-top: 0;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
</style>
