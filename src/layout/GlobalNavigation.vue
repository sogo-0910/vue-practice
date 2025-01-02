<template>
  <nav class="globalNavigation">
    <ul class="list">
      <li class="item">
        <RouterLink class="link" to="/">Home</RouterLink>
      </li>
      <li class="item">
        <RouterLink class="link" to="/food-select">Food select</RouterLink>
      </li>
      <li class="item">
        <RouterLink class="link" to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .globalNavigation {
    background-color: var(--COLOR-FOREGROUND-LIGHT);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    border-radius: 1000px;
    padding: 16px 24px;
  }

  .list {
    display: flex;
    gap: 16px;
    list-style: none;
  }

  .link {
    font-weight: bold;
    transition: color var(--TRANSITION);

    &:hover,
    &:active,
    &:focus {
      color: var(--COLOR-PRIMARY);
    }
  }
</style>
