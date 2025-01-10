<script setup lang="ts">
  import HeaderLayout from '@/layouts/HeaderLayout.vue'
  import MainLayout from '@/layouts/MainLayout.vue'
  import FooterLayout from '@/layouts/FooterLayout.vue'
</script>

<template>
  <HeaderLayout />
  <MainLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </MainLayout>
  <FooterLayout />
</template>

<style scoped lang="scss">
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity var(--TRANSITION);
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
</style>
