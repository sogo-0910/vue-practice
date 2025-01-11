<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { MQL } from '@/utilities/MediaQuery'
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import BaseLogo from '@/layouts/BaseLogo.vue'
  import HamburgerMenu from '@/layouts/HamburgerMenu.vue'
  import GlobalNavigation from '@/layouts/GlobalNavigation.vue'
  import OverlayBase from '@/components/OverlayBase.vue'

  const isMenuOpen = ref(false)
  const menuId = 'MenuControl-1'
  const switchMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
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
        <GlobalNavigation
          v-if="MQL.matches"
          :id="menuId"
          :is-active="isMenuOpen"
          :inert="!isMenuOpen"
        />
        <GlobalNavigation v-else :id="menuId" :is-active="isMenuOpen" :inert="!isMenuOpen" />
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
</style>
