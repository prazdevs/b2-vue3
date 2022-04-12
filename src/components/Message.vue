<script setup lang="ts">
import { useCounter } from "../composables/useCounter";

const props = defineProps({
  message: {
    type: String,
    required: true,
  }
})

const { counter, increment } = useCounter();
const { counter: counter2, increment: increment2 } = useCounter();

const nom = ref('')
const prenom = ref('')
const nomComplet = computed(() => `${prenom.value} ${nom.value}`)

watch(nomComplet, (newValue) => {
  console.log('nouvelle valeur', newValue)
})

console.log('in setup')

onMounted(() => {
  console.log(props.message)
})
</script>

<script lang="ts">
export default {
  name: 'Message',
  inheritAttrs: false,
}
</script>

<template>
<div>
  <p v-bind="$attrs">{{ message }}</p>

  <div v-bind="$attrs">
    <span>counter1: {{ counter }}</span>
    <button @click="increment">increment1</button>
  </div>

  <div>
    <span>counter2: {{ counter2 }}</span>
    <button @click="increment2">increment2</button>
  </div>

  <label>
    prenom:
    <input v-model="prenom" /> 
  </label>
  <label>
    nom:
    <input v-model="nom" />
  </label>
  <div>Nom complet: {{ nomComplet }}</div>
  </div>
</template>