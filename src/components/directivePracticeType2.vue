<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { Ref } from 'vue'
  const inputRef: Ref<string> = ref('')

  const score: Ref<number> = ref(0)
  const handleClick = () => {
    score.value++
  }

  const computedScore = computed<string>(() => {
    return score.value > 3 ? 'Good' : 'Bad'
  })

  const getScore = () => {
    console.log(computedScore.value)
  }

  const resetScore = () => {
    score.value = 0
  }
</script>

<template>
  <h2>ディレクティブ:v-model・computed・watcherの勉強</h2>

  <h3>v-model</h3>

  <!-- Start: v-model -->
  <div>text:{{ inputRef }}</div>
  <input v-model="inputRef" type="text" />
  <!-- End: v-model -->

  <h3>computed</h3>

  <!-- Start: computed -->
  <div>Score:{{ score }}</div>
  <div>{{ computedScore }}</div>
  <button type="button" @click="handleClick">+1</button>
  <button type="button" @click="getScore">getScore</button>
  <button type="button" @click="resetScore">resetScore</button>
  <!-- End: computed -->
</template>

<style scoped></style>
