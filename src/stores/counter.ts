import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)

  // Getter
  const doubleCount = computed(() => count.value * 2)

  // Action
  const increment = () => {
    count.value++
  }

  return {
    count,
    doubleCount,
    increment,
  }
})
