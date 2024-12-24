<script setup lang="ts">
  import { ref, watch, watchEffect } from 'vue'
  import type { Ref } from 'vue'

  const count1: Ref<number> = ref(0)
  const count2: Ref<number> = ref(0)
  interface Count3 {
    a: number
  }

  const count3: Ref<Count3> = ref({ a: 0 })

  // watchEffect(() => {
  //   console.log('watchEffect')
  //   console.log(count1.value, count2.value, count3.value)
  // })

  watch(
    [count1, count2, () => count3.value.a],
    (newValue, oldValue) => {
      console.log('watch')
      console.log(newValue)
      console.log(oldValue)
    },
    {
      immediate: true,
    },
  )
</script>

<template>
  <h2>ディレクティブ:watcherの勉強</h2>

  <!-- Start: watchEffect -->
  <div>
    count1:<em>{{ count1 }}</em>
  </div>
  <div>
    count2:<em>{{ count2 }}</em>
  </div>
  <div>
    count3:<em>{{ count3 }}</em>
  </div>
  <button type="button" @click="count1++">count1++</button>
  <button type="button" @click="count2++">count2++</button>
  <button type="button" @click="count3.a++">count3++</button>
  <!-- End: watchEffect -->
</template>

<style scoped></style>
