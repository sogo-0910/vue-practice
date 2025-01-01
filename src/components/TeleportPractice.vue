<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const dialogOpen: Ref<boolean> = ref(false)
</script>

<template>
  <button type="button" @click="dialogOpen = true">open</button>
  <Teleport to="body">
    <dialog :open="dialogOpen">
      <div>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>
      <button type="button" @click="dialogOpen = false">Close</button>
    </dialog>
  </Teleport>
</template>
