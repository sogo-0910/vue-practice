<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  const pageCount: Ref<number> = ref(0)
</script>

<template>
  <div>
    <button type="button" @click="pageCount = 1">1</button>
    <button type="button" @click="pageCount = 2">2</button>
    <button type="button" @click="pageCount = 3">3</button>
    <h2>Slot Practice</h2>
    <header>
      <slot name="header" :page-count="pageCount" page-id="id-1">header</slot>
    </header>
    <main>
      <slot name="main">main</slot>
    </main>
    <footer>
      <slot name="footer">footer</slot>
    </footer>
  </div>
</template>
