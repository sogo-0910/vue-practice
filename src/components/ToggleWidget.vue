<script setup lang="ts">
  import { ref } from 'vue'

  interface Props {
    title: string
  }

  const { title } = defineProps<Props>()
  const isToggleOpen = ref(false)

  const beforeEnter = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = '0'
    element.style.display = 'block'
  }

  const enter = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = `${element.scrollHeight}px`
  }

  const afterEnter = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = 'auto'
    element.style.display = 'block'
  }

  const beforeLeave = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = `${element.scrollHeight}px`
  }

  const leave = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = '0'
  }

  const handleClick = () => {
    isToggleOpen.value = !isToggleOpen.value
  }
</script>

<template>
  <div class="toggle">
    <button type="button" class="toggle__button" @click.prevent="handleClick">
      <span class="toggle__buttonText">{{ title }}</span>
    </button>

    <Transition
      name="slide"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="isToggleOpen" class="toggle__content">
        <div class="toggle__contentInner">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
  .toggle {
    margin-top: 64px;
    border: 2px solid var(--COLOR-PRIMARY);
    border-radius: 8px;

    &__button {
      width: 100%;
      padding: 16px 52px 16px 16px;
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 3px;
        top: 0;
        bottom: 0;
        right: 16px;
        margin-top: auto;
        margin-bottom: auto;
        background-color: var(--COLOR-PRIMARY);
        transition: transform var(--TRANSITION);
      }

      &::after {
        transform: rotate(90deg);
      }
    }

    &__buttonText {
      text-align: left;
      display: block;
      font-size: 2rem;
      color: var(--COLOR-PRIMARY);
      font-weight: var(--FONT-WEIGHT-BOLD);
    }

    &__contentInner {
      @extend %reset-margin;
      padding: 0 16px 16px;
    }

    & + & {
      margin-top: 40px;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: height 0.3s ease-in-out;
    overflow: hidden;
  }

  .slide-enter,
  .slide-leave-to {
    height: 0;
  }
</style>
