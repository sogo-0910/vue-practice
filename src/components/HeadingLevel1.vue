<script setup lang="ts">
  interface Props {
    subtitle?: string
  }
  const { subtitle } = defineProps<Props>()
</script>

<template>
  <h1 class="title">
    <span class="mainTitle"><slot></slot></span>
    <span v-if="subtitle" class="subTitle">{{ subtitle }}</span>
  </h1>
</template>

<style scoped lang="scss">
  .title {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: center;
    position: relative;
    padding-bottom: 20px;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin-inline: auto;
      width: 120px;
      height: 4px;
      background-color: var(--COLOR-PRIMARY);
    }
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
