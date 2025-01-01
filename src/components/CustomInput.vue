<script setup lang="ts">
  const [inputText, modifiers] = defineModel('inputText', {
    type: String,
    required: true,
    set(value) {
      if (modifiers.uppercase) {
        return value.toUpperCase()
      }

      return value
    },
  })

  const inputTitle = defineModel('inputTitle', {
    type: String,
    required: true,
  })
</script>

<template>
  <label>
    <span class="title">Input</span>
    <input v-model="inputText" type="text" />
  </label>
  <label>
    <span class="title">Input</span>
    <input v-model="inputTitle" type="text" />
  </label>
  <div>Child text: {{ inputText }}</div>
  <div>Modifiers: {{ modifiers }}</div>
  <div>Child title: {{ inputTitle }}</div>
</template>
