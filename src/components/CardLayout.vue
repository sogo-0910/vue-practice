<script setup lang="ts"></script>

<template>
  <div class="cardLayout">
    <slot></slot>
  </div>
</template>

<style scoped>
  .cardLayout {
    margin-top: var(--MARGIN-COMPONENTS-L);
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: clamp(1.6rem, calc(-2.667rem + 5.556vw), 4rem);
    max-width: 800px;

    @media (min-width: 768px) {
      justify-content: center;
    }
  }
</style>
