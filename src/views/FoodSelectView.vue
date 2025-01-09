<script setup lang="ts">
  import { useFoodSelector } from './../composables/useFoodSelector'
  import SectionLayout from '@/layout/SectionLayout.vue'
  import HeadingLevel1 from './../components/HeadingLevel1.vue'
  import CardLayout from './../components/CardLayout.vue'
  import CardItem from './../components/CardItem.vue'
  import { foodData } from './../data/foodData'
  import TextBase from './../components/TextBase.vue'

  const { foodDataRef, selectedFoodIndex, newFoodIndex, handleClickSelectedFood } =
    useFoodSelector(foodData)
</script>

<template>
  <SectionLayout>
    <HeadingLevel1>What are you having for dinner?</HeadingLevel1>

    <TextBase v-show="newFoodIndex >= foodDataRef.length">
      The dinner you chose is {{ foodDataRef[selectedFoodIndex].name }}
    </TextBase>

    <CardLayout>
      <CardItem
        :is-button="newFoodIndex < foodDataRef.length"
        :name="foodDataRef[selectedFoodIndex].name"
        :emoji="foodDataRef[selectedFoodIndex].emoji"
        :is-centering="newFoodIndex >= foodDataRef.length"
        @click="handleClickSelectedFood(selectedFoodIndex)"
      />

      <CardItem
        v-if="newFoodIndex < foodDataRef.length"
        :is-button="true"
        :name="foodDataRef[newFoodIndex].name"
        :emoji="foodDataRef[newFoodIndex].emoji"
        @click="handleClickSelectedFood(newFoodIndex)"
      />
    </CardLayout>
  </SectionLayout>
</template>
