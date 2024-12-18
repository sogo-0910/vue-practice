<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
const nameRef = ref<string>('john')
const priceRef = ref<number>(10)

const profileRef = ref<{ age: number; name: string }>({
  age: 25,
  name: 'dummy',
})

const birthdayReactive = reactive<{
  year: number
  month: number
  day: Ref<number>
}>({
  year: 1999,
  month: 9,
  day: ref(10),
})

const arrayReactive = reactive<Ref<number>[]>([ref(1), ref(2), ref(3)])

const refIntoObject: {
  year: number
  month: number
  day: Ref<number>
} = {
  year: 1999,
  month: 9,
  day: ref(10),
}

const refIntoObjectDay: Ref<number> = refIntoObject.day

const increment = () => {
  priceRef.value++
  profileRef.value.age++
  birthdayReactive.year++
  nameRef.value = `${nameRef.value} a`
  const firstElement = arrayReactive.shift()
  arrayReactive.push(firstElement!)
  refIntoObject.year++
  refIntoObject.day.value++
  refIntoObjectDay.value++
}
</script>

<template>
  <h1><em>nameRef:</em> {{ nameRef }}</h1>
  <div><em>priceRef:</em> {{ priceRef }}</div>
  <div><em>profileRef.age:</em> {{ profileRef.age }}</div>
  <div><em>birthdayReactive.year:</em> {{ birthdayReactive.year }}</div>
  <div><em>birthdayReactive.day:</em> {{ birthdayReactive.day }}</div>
  <div><em>arrayReactive:</em> {{ arrayReactive }}</div>
  <div><em>refIntoObject:</em> {{ refIntoObject.year }}/{{ refIntoObject.day.value }}</div>
  <div><em>refIntoObjectDay:</em> {{ refIntoObjectDay }}</div>
  <button type="button" @click="increment">button</button>
</template>

<style scoped>
h1 {
  color: red;
}

em {
  font-weight: bold;
}
</style>
