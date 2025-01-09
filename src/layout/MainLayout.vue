<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style scoped>
  .main {
    grid-area: content;
    margin: var(--MARGIN-SECTION) 0;
    height: 100%;

    > *:first-child {
      margin-top: 0 !important;
    }
  }
</style>
