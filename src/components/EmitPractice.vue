<script setup lang="ts">
  const emit = defineEmits(['resetCount'])
  const emitReset = () => {
    emit('resetCount', 0)
  }
</script>

<template>
  <button type="button" @click="emitReset">Reset</button>
</template>

<style scoped></style>
