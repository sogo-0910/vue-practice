<script setup lang="ts">
  import { useCounterStore } from '@/stores/counter'
  import ButtonLayout from '@/components/ButtonLayout.vue'
  import ButtonLayoutItem from '@/components/ButtonLayoutItem.vue'
  import ButtonBase from '@/components/ButtonBase.vue'
  const counterStore = useCounterStore()
</script>

<template>
  <div>count: {{ counterStore.count }}</div>
  <div>doubleCount: {{ counterStore.doubleCount }}</div>

  <ButtonLayout>
    <ButtonLayoutItem>
      <ButtonBase type="button" @click="counterStore.increment"> increment </ButtonBase>
    </ButtonLayoutItem>
  </ButtonLayout>
</template>
