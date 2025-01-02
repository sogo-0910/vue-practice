<script setup lang="ts">
  import { ref, shallowRef, defineAsyncComponent } from 'vue'
  import type { Ref, ShallowRef } from 'vue'
  import DefinePropsPractice from './components/DefinePropsPractice.vue'
  import EmitPractice from './components/emitPractice.vue'
  const totalCount: Ref<number> = ref(0)
  const handleResetTotalCount = (value: number) => {
    totalCount.value = value
  }

  import SlotPractice from './components/SlotPractice.vue'
  import CompA from './components/CompA.vue'
  import BaseLoader from './components/BaseLoader.vue'
  import BaseError from './components/BaseError.vue'
  const CompB = defineAsyncComponent({
    loader: () => import('./components/CompB.vue'),
    loadingComponent: BaseLoader,
    errorComponent: BaseError,
    timeout: 1000,
    // delay: 0,
  })
  import CompC from './components/CompC.vue'
  type ComponentType = typeof CompA | typeof CompB | typeof CompC
  const currentComp: ShallowRef<ComponentType> = shallowRef(CompA)

  import TeleportPractice from './components/TeleportPractice.vue'
  import FormPractice from './components/FormPractice.vue'
  import TransitionPractice from './components/TransitionPractice.vue'
</script>

<template>
  <h1>Vue Practice</h1>
  <DefinePropsPractice :total-count="totalCount" />
  <button type="button" @click="totalCount++">+1</button>
  <EmitPractice @reset-count="handleResetTotalCount" />
  <hr />
  <SlotPractice>
    <template #header="{ pageCount, pageId }">
      <div>{{ pageCount }}</div>
      <div>{{ pageId }}</div>
      <div v-if="pageCount === 1">
        <p>1のコンテンツ</p>
      </div>
      <div v-else-if="pageCount === 2">
        <p>2のコンテンツ</p>
      </div>
      <div v-else-if="pageCount === 3">
        <p>3のコンテンツ</p>
      </div>
    </template>
    <template #main>
      <p>main main main</p>
    </template>
    <template #footer>
      <p>footer footer footer</p>
    </template>
  </SlotPractice>
  <hr />
  <button type="button" @click="currentComp = CompA">A</button>
  <button type="button" @click="currentComp = CompB">B</button>
  <button type="button" @click="currentComp = CompC">C</button>
  <KeepAlive :exclude="['CompA', 'CompC']">
    <component :is="currentComp" />
  </KeepAlive>
  <hr />
  <TeleportPractice />
  <hr />
  <FormPractice />
  <hr />
  <TransitionPractice />
</template>

<style scoped>
  .div {
    width: 100%;
  }

  hr {
    margin: 40px 0;
  }
</style>
