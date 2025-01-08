<script setup lang="ts">
  import TextBase from '@/components/TextBase.vue'
  import HeadingLevel1 from './../components/HeadingLevel1.vue'
</script>

<template>
  <HeadingLevel1 subtitle="404">Not Found</HeadingLevel1>
  <TextBase>{{ $route.params }}</TextBase>
</template>
