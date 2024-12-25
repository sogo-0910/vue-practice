<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  const fruitsArray: Ref<{ id: number; name: string }[]> = ref([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Grape' },
  ])

  const disabledRef: Ref<boolean> = ref(false)

  const handleClick = () => {
    console.log(fruitsArray.value.length)
    fruitsArray.value?.shift()

    if (fruitsArray.value.length === 0) {
      disabledRef.value = true
    }
  }

  const objectArray: Ref<{ id: number; name: string; age: number }> = ref({
    id: 1,
    name: 'aaa',
    age: 22,
  })
</script>

<template>
  <h2>v-forの勉強</h2>
  <button type="button" :disabled="disabledRef" @click="handleClick">shift</button>
  <ul v-if="fruitsArray.length">
    <template v-for="({ id, name }, index) in fruitsArray" :key="`${name}-${id}`">
      <li :id="`${name}-${id}`">name: {{ name }}, id: {{ id }}, index: {{ index }}</li>
    </template>
  </ul>

  <ul v-if="objectArray">
    <li v-for="value in objectArray" :key="value">
      {{ value }}
    </li>
  </ul>
</template>

<style scoped>
  ul {
    margin-top: 1rem;
  }
</style>
