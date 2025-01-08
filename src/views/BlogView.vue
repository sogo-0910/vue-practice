<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import HeadingLevel1 from './../components/HeadingLevel1.vue'
  import TextBase from '@/components/TextBase.vue'
  import { onMounted, watch } from 'vue'

  const route = useRoute()
  const router = useRouter()
  onMounted(() => {
    console.log('onMounted')
  })

  watch(
    () => route.params.id,
    () => {
      console.log('watch')
    },
  )
</script>

<template>
  <HeadingLevel1>Blog</HeadingLevel1>
  <TextBase>{{ route.params.id }}</TextBase>
  <button
    type="button"
    @click="router.push({ name: 'blog', params: { id: Number(route.params.id) + 1 } })"
  >
    Next Blog
  </button>
</template>
