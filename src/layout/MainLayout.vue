<script setup lang="ts">
  import SectionLayout from './SectionLayout.vue'
</script>

<template>
  <main class="main">
    <SectionLayout>
      <slot></slot>
    </SectionLayout>
  </main>
</template>

<style scoped>
  .main {
    grid-area: content;
    margin: var(--MARGIN-SECTION) 0;
    height: 100%;

    > *:first-child {
      margin-top: 0;
    }
  }
</style>
