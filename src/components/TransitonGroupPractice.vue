<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const arrayRef: Ref<string[]> = ref(['A', 'B', 'C'])
  const inputModel: Ref<string> = ref('')

  const addArray = () => {
    arrayRef.value.unshift(inputModel.value)

    inputModel.value = ''
  }

  const removeArray = () => {
    arrayRef.value.splice(2, 1)
  }
</script>

<template>
  <h2>TransitionGroup Practice</h2>
  <input v-model="inputModel" type="text" />
  <button type="button" @click="addArray">add</button>
  <button type="button" @click="removeArray">remove</button>

  <TransitionGroup name="fade" tag="ul">
    <li v-for="item in arrayRef" :key="item">{{ item }}</li>
  </TransitionGroup>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-leave-active {
    position: absolute;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-move {
    transition: transform 0.5s;
  }
</style>
