<script setup lang="ts">
import { useTodos } from '../composables/useTodos';

const { t, availableLocales } = useI18n()
const { todos, newTask, addNewTask } = useTodos()
</script>

<template>
  <label>
    <span>{{ t('addTask') }}</span>
    <input v-model="newTask.title" />
  </label>
  <button @click="addNewTask">Add</button>
  <ul>
    <li v-for="todo in todos" :key="todo.title">
      <TodoItem :title="todo.title" v-model:done="todo.done" />
    </li>
  </ul>
</template>
