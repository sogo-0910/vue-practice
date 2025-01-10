<template>
  <RouterLink :to="{ name: 'home' }" class="logo">LOGO</RouterLink>
</template>

<style scoped lang="scss">
  .logo {
    font-weight: bold;
    transition: color var(--TRANSITION);
    font-size: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;

    @include mixin.media(hover) {
      &:hover {
        color: var(--COLOR-PRIMARY);
      }
    }
  }
</style>
