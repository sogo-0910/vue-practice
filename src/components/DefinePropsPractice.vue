<script setup lang="ts">
  import { computed, watch } from 'vue'

  const { totalCount, totalCount2 } = defineProps({
    totalCount: {
      type: Number,
      required: true,
    },
    totalCount2: {
      type: [Object, Number, String],
      default: () => ({ age: 10, age2: 20 }),
    },
  })

  watch(
    () => totalCount,
    (newValue, oldValue) => {
      console.log('watch')
      console.log(newValue)
      console.log(oldValue)
    },
    {
      immediate: true,
    },
  )

  const computedTotalCount = computed(() => {
    return totalCount > 5 ? 'Good' : 'Bad'
  })
</script>

<template>
  <div>totalCount: {{ totalCount }}</div>
  <div>totalCount2: {{ totalCount2 }}</div>
  <div>{{ computedTotalCount }}</div>
</template>

<style scoped></style>
