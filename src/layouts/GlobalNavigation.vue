<script setup lang="ts">
  import { ref, watch } from 'vue'

  interface Props {
    isActive: boolean
  }
  const { isActive } = defineProps<Props>()

  const navigation = ref<HTMLElement | null>(null)

  const updateHeight = (active: boolean) => {
    const element = navigation.value
    if (element) {
      if (active) {
        element.style.height = `${element.scrollHeight}px`
      } else {
        element.style.height = '0px'
      }
    }
  }

  watch(
    () => isActive,
    (newVal) => {
      updateHeight(newVal)
    },
  )
</script>

<template>
  <div ref="navigation" class="globalNavigation" :class="{ 'is-active': isActive }">
    <nav class="nav">
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
  </div>
</template>

<style scoped lang="scss">
  .globalNavigation {
    background-color: var(--COLOR-FOREGROUND-LIGHT);

    @include mixin.media(sp) {
      width: 100%;
      position: absolute;
      left: 0;
      top: var(--HEADER-HEIGHT);
      height: 0;
      visibility: hidden;
      overflow: hidden;
      transition: height var(--TRANSITION);
      max-height: calc(100vh - var(--HEADER-HEIGHT));

      &.is-active {
        height: auto;
        visibility: visible;
      }
    }

    @include mixin.media(pc) {
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
      border-radius: 1000px;
    }
  }

  .nav {
    padding: 0 16px;
    height: 100%;

    @include mixin.media(pc) {
      padding: 16px 24px;
    }
  }

  .list {
    display: flex;
    list-style: none;

    @include mixin.media(sp) {
      flex-direction: column;
    }

    @include mixin.media(pc) {
      gap: 16px;
    }
  }

  .item {
    @include mixin.media(sp) {
      border-top: 1px solid var(--COLOR-PRIMARY);
      border-bottom: 1px solid var(--COLOR-PRIMARY);

      &:last-child {
        border-bottom: 0;
      }
    }
  }

  .link {
    font-weight: bold;
    transition: color var(--TRANSITION);

    @include mixin.media(sp) {
      padding: 16px 0;
      position: relative;

      &::before {
        position: absolute;
        display: block;
        content: '';
        width: 8px;
        height: 8px;
        top: 50%;
        right: 10px;
        transform: translateY(-50%) rotate(45deg);
        border-top: 2px solid var(--COLOR-PRIMARY);
        border-right: 2px solid var(--COLOR-PRIMARY);
      }
    }

    @include mixin.media(hover) {
      &:hover {
        color: var(--COLOR-PRIMARY);
      }
    }
  }
</style>
