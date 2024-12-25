<script setup lang="ts">
  const { subtitle } = defineProps({
    subtitle: {
      type: [String],
      default: undefined,
    },
  })
</script>

<template>
  <h1 class="title">
    <span class="mainTitle"><slot></slot></span>
    <span v-if="subtitle" class="subTitle">{{ subtitle }}</span>
  </h1>
</template>

<style scoped>
  .title {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }

  .mainTitle {
    display: block;
    font-size: 3.2rem;
  }

  .subTitle {
    display: block;
    font-size: 1.6rem;
  }
</style>
