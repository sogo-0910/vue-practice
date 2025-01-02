<template>
  <RouterLink to="/" class="logo">LOGO</RouterLink>
</template>

<style scoped>
  .logo {
    font-weight: bold;
    transition: color var(--TRANSITION);
    font-size: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;

    &:hover,
    &:active,
    &:focus {
      color: var(--COLOR-PRIMARY);
    }
  }
</style>
