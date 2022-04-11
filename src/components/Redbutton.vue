<script setup lang="ts">
const emit = defineEmits(['click'])

const color = '#FF0000'
</script>

<template>
  <button class="button" @click="emit('click')"><slot></slot></button>
</template>

<style scoped>
.button {
  color: v-bind(color)
}
</style>