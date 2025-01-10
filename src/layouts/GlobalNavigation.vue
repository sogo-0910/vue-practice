<template>
  <nav class="globalNavigation">
    <ul class="list">
      <li class="item">
        <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
      </li>
      <li class="item">
        <RouterLink class="link" :to="{ name: 'foodSelect' }">Food select</RouterLink>
      </li>
      <li class="item">
        <RouterLink class="link" :to="{ name: 'about' }">About</RouterLink>
      </li>
      <li class="item">
        <RouterLink class="link" :to="{ name: 'posts', params: { id: 'name' } }"
          >Profile</RouterLink
        >
      </li>
      <li class="item">
        <RouterLink class="link" :to="{ name: 'blog', params: { id: 1 } }">Blog</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
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

    @include mixin.media(hover) {
      &:hover {
        color: var(--COLOR-PRIMARY);
      }
    }
  }
</style>
