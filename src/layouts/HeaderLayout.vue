<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { MQL } from '@/utilities/MediaQuery'
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import BaseLogo from '@/layouts/BaseLogo.vue'
  import HamburgerMenu from '@/layouts/HamburgerMenu.vue'
  import GlobalNavigationPC from './GlobalNavigationPC.vue'
  import GlobalNavigationSP from './GlobalNavigationSP.vue'
  import OverlayBase from '@/components/OverlayBase.vue'

  const isMenuOpen = ref(false)
  const menuId = 'MenuControl-1'
  const switchMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    const { body } = document

    if (isMenuOpen.value) {
      body.classList.add('is-fixed')
    } else {
      body.classList.remove('is-fixed')
    }
  }
  const router = useRouter()
  router.beforeEach(() => {
    isMenuOpen.value = false
  })

  const handleMediaQueryChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      isMenuOpen.value = false
    }
  }

  MQL.addEventListener('change', handleMediaQueryChange)

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
    element.style.overflowY = 'auto'
  }

  const beforeLeave = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = `${element.scrollHeight}px`
  }

  const leave = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = '0'
  }
</script>

<template>
  <header class="header">
    <SectionLayout>
      <div class="flex">
        <BaseLogo />
        <HamburgerMenu
          :aria-controls="menuId"
          :aria-expanded="isMenuOpen"
          :is-active="isMenuOpen"
          @click="switchMenu"
        />
        <GlobalNavigationPC />
        <Transition
          name="slide"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <GlobalNavigationSP
            v-show="isMenuOpen"
            :id="menuId"
            :is-active="isMenuOpen"
            :inert="!isMenuOpen"
          />
        </Transition>
      </div>
    </SectionLayout>
    <OverlayBase :is-active="isMenuOpen" @click="switchMenu" />
  </header>
</template>

<style scoped lang="scss">
  .header {
    @extend %reset-margin;
    grid-area: header;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 16px 0;
    height: var(--HEADER-HEIGHT);
    background-color: var(--COLOR-BACKGROUND-LIGHT);
  }

  .flex {
    display: flex;

    @include mixin.media(pc) {
      justify-content: space-between;
      align-items: center;
      gap: 24px;
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
