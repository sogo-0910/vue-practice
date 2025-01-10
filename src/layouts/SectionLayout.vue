<template>
  <div class="section">
    <div class="inner"><slot></slot></div>
  </div>
</template>

<style scoped>
  .section {
    display: grid;
    gap: 0 clamp(1.6rem, calc(-2.667rem + 5.556vw), 4rem);
    grid-column: 1 / 4;
    grid-template-columns: 1fr minmax(300px, 1200px) 1fr;

    & + & {
      margin-top: var(--MARGIN-SECTION);
    }
  }

  .inner {
    grid-column: 2 / 3;
  }
</style>
