<script setup lang="ts">
  import HeaderLayout from './layout/HeaderLayout.vue'
  import MainLayout from './layout/MainLayout.vue'
  import FooterLayout from './layout/FooterLayout.vue'
  import HeadingLevel1 from './components/HeadingLevel1.vue'
</script>

<template>
  <HeaderLayout />
  <MainLayout>
    <HeadingLevel1>What are you eating today?</HeadingLevel1>
  </MainLayout>
  <FooterLayout />
</template>

<style scoped>
  .div {
    width: 100%;

    hr {
      margin: 40px 0;
    }
  }
</style>
