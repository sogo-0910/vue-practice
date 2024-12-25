<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  const ok: Ref<boolean> = ref(true)
</script>

<template>
  <h2>v-ifの勉強</h2>
  <button type="button" @click="ok = !ok">toggle</button>
  <template v-if="ok">
    <p>OK!</p>
    <p>OK!!</p>
    <p>OK!!!</p>
  </template>
</template>
