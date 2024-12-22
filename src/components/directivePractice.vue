<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

const message: Ref<string> = ref('<h1>Directive</h1>')
const vBindURL: Ref<string> = ref('https://www.google.com/')
const href: Ref<string> = ref('https://www.google.com/')
const id: Ref<string> = ref('anchor')
</script>

<template>
  <!-- Start: v-html -->
  <div v-html="message"></div>
  <!-- End: v-html -->

  <!-- Start: v-bind -->
  <a :href="vBindURL">v-bind link</a>
  <a :id :href>v-bind link（省略）{{ id }}</a>
  <button type="submit" :disabled="true">Button</button>
  <!-- End: v-bind -->
</template>

<style scoped></style>
