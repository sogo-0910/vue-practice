<script setup lang="ts">
  import reactivePractice from './components/reactivePractice.vue'
  import directivePractice from './components/directivePractice.vue'
  import DirectivePracticeType2 from './components/directivePracticeType2.vue'
  import DirectivePracticeType3 from './components/directivePracticeType3.vue'
</script>

<template>
  <h1>Vue Practice</h1>
  <div className="div">
    <reactivePractice />
    <hr />
    <directivePractice />
    <hr />
    <DirectivePracticeType2 />
    <hr />
    <DirectivePracticeType3 />
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
