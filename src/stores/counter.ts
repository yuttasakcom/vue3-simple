import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment = (i:number) => count.value += i
  const decrement = (i:number) => count.value -= i
  return { count, doubleCount, increment, decrement }
})
