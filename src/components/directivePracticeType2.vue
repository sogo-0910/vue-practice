<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  const inputRef: Ref<string> = ref('')
</script>

<template>
  <h2>ディレクティブ:v-model・computed・watcherの勉強</h2>

  <!-- Start: v-model -->
  <div>text:{{ inputRef }}</div>
  <input v-model="inputRef" type="text" />
  <!-- End: v-model -->
</template>

<style scoped></style>
