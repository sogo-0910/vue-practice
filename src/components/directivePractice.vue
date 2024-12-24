<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  // v-html
  const vHtmlMessage: Ref<string> = ref('<h2>ディレクティブ:v-html・v-bind・v-onの勉強</h2>')

  // v-bind
  const vBindURL: Ref<string> = ref('https://www.google.com/')
  const href: Ref<string> = ref('https://www.google.com/')
  const id: Ref<string> = ref('anchor')

  // v-on
  const eventName = 'click'
  const count: Ref<number> = ref(0)
  const handleClick = (event: MouseEvent, times: number) => {
    count.value = event.clientX * times

    if (count.value > 5) {
      const target = event.currentTarget as HTMLElement
      target.classList.add('bg-red')
    }
  }
</script>

<template>
  <!-- Start: v-html -->
  <div v-html="vHtmlMessage"></div>
  <!-- End: v-html -->

  <h3>v-bind</h3>

  <!-- Start: v-bind -->
  <a :href="vBindURL">v-bind link</a>
  <a :id :href>v-bind link（省略）{{ id }}</a>
  <!-- End: v-bind -->

  <h3>v-on</h3>

  <!-- Start: v-on -->
  <div>{{ count }}</div>
  <button
    type="button"
    :disabled="count > 350"
    @[eventName].prevent.stop="(event: MouseEvent) => handleClick(event, 5)"
  >
    Button
  </button>
  <a :href="vBindURL" @[eventName].prevent.stop="(event: MouseEvent) => handleClick(event, 5)"
    >v-on prevent link</a
  >
  <!-- End: v-on -->
</template>

<style scoped>
  .bg-red {
    background-color: red;
  }
</style>
