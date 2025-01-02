<script setup lang="ts">
  import HeaderLayout from './layout/HeaderLayout.vue'
  import MainLayout from './layout/MainLayout.vue'
  import FooterLayout from './layout/FooterLayout.vue'
</script>

<template>
  <HeaderLayout />
  <MainLayout>
    <RouterView />
  </MainLayout>
  <FooterLayout />
</template>
