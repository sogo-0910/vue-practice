<script setup lang="ts">
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import HeadingLevel1 from '@/components/HeadingLevel1.vue'
  import CounterComp from '@/components/CounterComp.vue'
</script>

<template>
  <SectionLayout>
    <HeadingLevel1>{{ $route.meta.title }}</HeadingLevel1>
    <CounterComp />
  </SectionLayout>
</template>
