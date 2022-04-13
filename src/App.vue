<script setup lang="ts">
import { useCycleList } from '@vueuse/core'
import { useUserStore } from './stores/user'

const { availableLocales, locale } = useI18n()
const { next: nextLang } = useCycleList(availableLocales, { initialValue: locale  })
const userStore = useUserStore()
</script>

<template>
  <div>
    <input v-model="userStore.user" />
    <button 
      class="bg-violet-500 text-white p-2 rounded-full uppercase sm:(bg-green-600 rounded-none)"
      @click="() => locale =  nextLang()"
    >
      change lang
    </button>
  </div>
  <TodoList />
  <!-- <TodoItem 
    v-for="(todo,idx) in todos"
    :key="idx"
    :title="todo.title"
    :done="todo.done"
    @checked="() => { todo.done = !todo.done }"
  /> -->
  <!-- <TodoItem 
    v-for="(todo,idx) in todos"
    :key="idx"
    :title="todo.title"
    :done="todo.done"
    @checked="toggleTodo(idx)"
  /> -->
  <!-- <TodoItem 
    v-for="(todo,idx) in todos"
    :key="idx"
    :title="todo.title"
    :done="todo.done"
    @checked="toggleTodo(idx)"
  /> -->
  <!-- <TodoItem 
    v-for="(todo,idx) in todos"
    :key="idx"
    :title="todo.title"
    v-model:done="todo.done"
  /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
