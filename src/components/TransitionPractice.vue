<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  const isShowRef: Ref<boolean> = ref(true)

  let enterIntervalId: number

  const beforeEnter = (element: Element) => {
    if (!(element instanceof HTMLElement)) {
      return
    }

    element.style.transform = 'translateX(30px)'
  }

  const enter = (element: Element, done: () => void) => {
    if (!(element instanceof HTMLElement)) {
      return
    }

    let translateXValue = 30
    enterIntervalId = setInterval(() => {
      translateXValue -= 1
      element.style.transform = `translateX(${translateXValue}px)`

      if (translateXValue === 0) {
        clearInterval(enterIntervalId)
        done()
      }
    }, 20)
  }

  const enterCancelled = () => {
    clearInterval(enterIntervalId)
  }

  let leaveIntervalId: number

  const leave = (element: Element, done: () => void) => {
    if (!(element instanceof HTMLElement)) {
      return
    }

    let translateXValue = 0
    leaveIntervalId = setInterval(() => {
      translateXValue += 1
      element.style.transform = `translateX(${translateXValue}px)`

      if (translateXValue === 30) {
        clearInterval(leaveIntervalId)
        done()
      }
    }, 20)
  }

  const leaveCancelled = () => {
    clearInterval(leaveIntervalId)
  }
</script>

<template>
  <h2>Transition Practice</h2>
  <button type="button" @click="isShowRef = !isShowRef">toggle</button>

  <!-- <Transition name="fade" appear mode="out-in">
    <div v-if="isShowRef">fade true</div>
    <div v-else>fade false</div>
  </Transition> -->

  <Transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @enter-cancelled="enterCancelled"
    @leave="leave"
    @leave-cancelled="leaveCancelled"
  >
    <div v-show="isShowRef">fade true</div>
  </Transition>

  <!-- <Transition name="custom-class" enter-active-class="slideEnterActive" leave-active-class="slideLeaveActive">
    <div v-if="isShowRef">slide<br />slide<br />slide<br />slide</div>
  </Transition> -->
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slideEnterActive {
    animation: slide 1s;
  }

  .slideLeaveActive {
    animation: slide 1s reverse;
  }

  @keyframes slide {
    0% {
      transform: translateX(100px);
    }
    50% {
      transform: translateX(30px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
