<script setup lang="ts">
defineProps({
  done: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(['update:done'])
</script>

<template>
  <label>
    <input 
      type="checkbox"
      :checked="done"
      @change="emit('update:done', ($event.target as HTMLInputElement).checked)"
    />
    <span>{{ title }}</span>
  </label>
</template>