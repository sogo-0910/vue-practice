import { ref } from 'vue'

export interface FoodItem {
  name: string
  emoji: string
}

export const useFoodSelector = (initialFoodData: FoodItem[]) => {
  const foodDataRef = ref(initialFoodData)
  const selectedFoodIndex = ref(0)
  const newFoodIndex = ref(1)

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
