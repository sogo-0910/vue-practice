<script setup lang="ts">
import reactivePractice from './components/reactivePractice.vue'
import directivePractice from './components/directivePractice.vue'
</script>

<template>
  <div className="div">
    <reactivePractice />
    <hr />
    <directivePractice />
    <hr />
  </div>
</template>

<style scoped>
.div {
  width: 100%;
  hr {
    margin: 40px 0;
  }
}
</style>
