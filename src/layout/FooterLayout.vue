<script setup lang="ts">
  import SectionLayout from './SectionLayout.vue'
</script>

<template>
  <footer class="footer">
    <SectionLayout>
      <div class="text">FOOTER</div>
    </SectionLayout>
  </footer>
</template>

<style scoped>
  .footer {
    grid-area: 'footer';
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
