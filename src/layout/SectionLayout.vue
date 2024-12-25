<template>
  <div class="section">
    <div class="inner"><slot></slot></div>
  </div>
</template>

<style scoped>
  .section {
    display: grid;
    gap: 0 16px;
    grid-column: 1 / 4;
    grid-template-columns: 1fr minmax(300px, 1200px) 1fr;
    margin-top: var(--MARGIN-SECTION);

    @media (min-width: 768px) {
      gap: 0 40px;
    }
  }

  .inner {
    grid-column: 2 / 3;
  }
</style>
