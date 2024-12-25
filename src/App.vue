<script setup lang="ts">
  import reactivePractice from './components/reactivePractice.vue'
  import directivePractice from './components/directivePractice.vue'
  import directivePracticeType2 from './components/directivePracticeType2.vue'
  import directivePracticeType3 from './components/directivePracticeType3.vue'
  import vIfPractice from './components/vIfPractice.vue'
  import vShowPractice from './components/vShowPractice.vue'
  import vForPractice from './components/vForPractice.vue'
</script>

<template>
  <h1>Vue Practice</h1>
  <div className="div">
    <reactivePractice />
    <hr />
    <directivePractice />
    <hr />
    <directivePracticeType2 />
    <hr />
    <directivePracticeType3 />
    <hr />
    <vIfPractice />
    <hr />
    <vShowPractice />
    <hr />
    <vForPractice />
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
