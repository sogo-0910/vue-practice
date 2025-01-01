import { ref } from 'vue'
import type { Ref } from 'vue'

export interface FoodItem {
  name: string
  emoji: string
}

export const useFoodSelector = (initialFoodData: FoodItem[]) => {
  const foodDataRef: Ref<FoodItem[]> = ref(initialFoodData)
  const selectedFoodIndex: Ref<number> = ref(0)
  const newFoodIndex: Ref<number> = ref(1)

  const handleClickSelectedFood = (index: number) => {
    if (index >= 0 && index < foodDataRef.value.length) {
      selectedFoodIndex.value = index
      newFoodIndex.value++
    }
  }

  return {
    foodDataRef,
    selectedFoodIndex,
    newFoodIndex,
    handleClickSelectedFood,
  }
}
