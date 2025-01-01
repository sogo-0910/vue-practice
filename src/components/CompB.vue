<script setup lang="ts">
  import { onActivated, onDeactivated, ref } from 'vue'
  import type { Ref } from 'vue'

  const count: Ref<number> = ref(0)

  onActivated(() => {
    console.log('onActivated')
  })

  onDeactivated(() => {
    console.log('onDeactivated')
  })
</script>

<template>
  <div>
    <div>CompB</div>

    <button type="button" @click="count++">count++</button>
    <div>{{ count }}</div>
  </div>
</template>
