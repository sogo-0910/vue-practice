<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import HeaderLayout from './layout/HeaderLayout.vue'
  import MainLayout from './layout/MainLayout.vue'
  import FooterLayout from './layout/FooterLayout.vue'
  import HeadingLevel1 from './components/HeadingLevel1.vue'
  import CardLayout from './components/CardLayout.vue'
  import CardItem from './components/CardItem.vue'
  import { foodData } from './data/foodData'
  import TextBase from './components/TextBase.vue'

  const foodDataRef: Ref<{ name: string; emoji: string }[]> = ref(foodData)
  const selectedFoodIndex: Ref<number> = ref(0)
  const NewFoodIndex: Ref<number> = ref(1)

  const handleClickSelectedFood = (index: number) => {
    if (index >= 0 && index < foodDataRef.value.length) {
      selectedFoodIndex.value = index
      NewFoodIndex.value++
    }
  }
</script>

<template>
  <HeaderLayout />
  <MainLayout>
    <HeadingLevel1>What are you having for dinner?</HeadingLevel1>

    <TextBase v-show="NewFoodIndex >= foodDataRef.length"
      >The dinner you chose is {{ foodDataRef[selectedFoodIndex].name }}</TextBase
    >

    <CardLayout>
      <CardItem
        :is-button="NewFoodIndex < foodDataRef.length"
        :name="foodDataRef[selectedFoodIndex].name"
        :emoji="foodDataRef[selectedFoodIndex].emoji"
        :is-centering="NewFoodIndex >= foodDataRef.length"
        @click="handleClickSelectedFood(selectedFoodIndex)"
      />

      <CardItem
        v-if="NewFoodIndex < foodDataRef.length"
        :is-button="true"
        :name="foodDataRef[NewFoodIndex].name"
        :emoji="foodDataRef[NewFoodIndex].emoji"
        @click="handleClickSelectedFood(NewFoodIndex)"
      />
    </CardLayout>
  </MainLayout>
  <FooterLayout />
</template>
