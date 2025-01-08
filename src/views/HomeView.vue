<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import HeadingLevel1 from './../components/HeadingLevel1.vue'

  const router = useRouter()
</script>

<template>
  <HeadingLevel1>Home</HeadingLevel1>

  <button type="button" @click="router.push({ name: 'blog', params: { id: 3 } })">Button</button>
</template>
