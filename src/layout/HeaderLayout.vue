<script setup lang="ts">
  import SectionLayout from './SectionLayout.vue'
</script>

<template>
  <header class="header">
    <SectionLayout>
      <div class="text">HEADER</div>
    </SectionLayout>
  </header>
</template>

<style scoped>
  .header {
    grid-area: header;
    background-color: var(--COLOR-BACKGROUND-ORANGE);
    padding: 16px 0;

    > *:first-child {
      margin-top: 0;
    }
  }

  .text {
    text-align: center;
    font-weight: var(--FONT-WEIGHT-BOLD);
  }
</style>
