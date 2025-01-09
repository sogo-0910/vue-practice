<script setup lang="ts">
  import SectionLayout from '@/layout/SectionLayout.vue'
  import HeadingLevel1 from './../components/HeadingLevel1.vue'
  import TextBase from '@/components/TextBase.vue'

  defineProps({
    catchAll: {
      type: Array,
      required: true,
    },
  })
</script>

<template>
  <SectionLayout>
    <HeadingLevel1 subtitle="404">Not Found</HeadingLevel1>
    <TextBase>{{ catchAll }}</TextBase>
  </SectionLayout>
</template>
