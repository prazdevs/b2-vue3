<script setup lang="ts">
import { useTodos } from '../composables/useTodos';

const { t } = useI18n()
const { todos, newTask, addNewTask } = useTodos()
</script>

<template>
  <label>
    <span>{{ t('addTask') }}</span>
    <input v-model="newTask.title" />
  </label>
  <button class="task__add" @click="addNewTask">Add</button>
  <ul>
    <li 
      v-for="(todo, i) in todos"
      :key="todo.title"
      :w:bg="i % 2 == 0 ? 'gray-200' : 'gray-300'"
    >
      <TodoItem :title="todo.title" v-model:done="todo.done" />
    </li>
  </ul>
</template>

<style lang="pcss" scoped>
.task__add {
  @apply bg-green-300 rounded-md p-2;
  @apply text-green-800;
  @apply font-bold;
}
</style>