<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
  .main {
    @extend %reset-margin;

    grid-area: content;
    margin: var(--MARGIN-SECTION) 0;
    height: 100%;
  }
</style>
