<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import DefinePropsPractice from './components/DefinePropsPractice.vue'
  const totalCount: Ref<number> = ref(0)
</script>

<template>
  <h1>Vue Practice</h1>
  <DefinePropsPractice :total-count="totalCount" />
  <button type="button" @click="totalCount++">+1</button>
</template>

<style scoped>
  .div {
    width: 100%;

    hr {
      margin: 40px 0;
    }
  }
</style>
