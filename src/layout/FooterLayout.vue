<script setup lang="ts">
  import SectionLayout from './SectionLayout.vue'
  import BaseLogo from './BaseLogo.vue'
</script>

<template>
  <footer class="footer">
    <SectionLayout>
      <BaseLogo />
    </SectionLayout>
  </footer>
</template>

<style scoped>
  .footer {
    grid-area: 'footer';
    padding: 16px 0;

    > *:first-child {
      margin-top: 0;
    }
  }
</style>
