import { computed, ref } from "vue";

export function useCounter() {
  const counter = ref(0)

  const readonlyCounter = computed(() => counter.value)

  function increment() {
    counter.value++
  }

  return {
    counter: readonlyCounter, increment
  }
}
