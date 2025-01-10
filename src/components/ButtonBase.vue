<script setup lang="ts">
  import { defineProps } from 'vue'

  interface Props {
    type?: 'button' | 'link' | 'router-link'
    to?: string | Record<string, unknown> | null
    onClick?: () => void | null
  }

  const { type = 'button', to = null, onClick = null } = defineProps<Props>()
</script>

<template>
  <component
    :is="type === 'router-link' ? 'RouterLink' : type === 'link' ? 'a' : 'button'"
    class="buttonBase"
    v-bind="type === 'router-link' ? { to } : type === 'link' ? { href: to } : { type: 'button' }"
    @click="type === 'button' && onClick ? onClick() : null"
  >
    <slot />
  </component>
</template>

<style scoped>
  .buttonBase {
    width: 100%;
    color: var(--COLOR-PRIMARY);
    background-color: var(--COLOR-FOREGROUND-LIGHT);
    padding: 16px;
    border-radius: 8px;
    border: 2px solid var(--COLOR-PRIMARY);
    font-weight: var(--FONT-WEIGHT-BOLD);
    text-align: center;
    transition:
      color var(--TRANSITION),
      background-color var(--TRANSITION);

    &:hover,
    &:active,
    &:focus {
      color: var(--COLOR-FOREGROUND-LIGHT);
      background-color: var(--COLOR-PRIMARY);
    }
  }
</style>
