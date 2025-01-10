<script setup lang="ts">
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import BaseLogo from '@/layouts/BaseLogo.vue'
</script>

<template>
  <footer class="footer">
    <SectionLayout>
      <BaseLogo />
    </SectionLayout>
  </footer>
</template>

<style scoped lang="scss">
  @use '@/styles/_common/extend/' as *;

  .footer {
    @extend %reset-margin;
    grid-area: 'footer';
    padding: 16px 0;
  }
</style>
