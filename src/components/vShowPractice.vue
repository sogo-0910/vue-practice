<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  const ok: Ref<boolean> = ref(true)
</script>

<template>
  <h2>v-showの勉強</h2>
  <button type="button" @click="ok = !ok">toggle</button>
  <div v-show="ok">
    <p>OK!</p>
    <p>OK!!</p>
    <p>OK!!!</p>
  </div>
  <div v-show="!ok">
    <p>not OK!</p>
    <p>not OK!!</p>
    <p>not OK!!!</p>
  </div>
</template>
