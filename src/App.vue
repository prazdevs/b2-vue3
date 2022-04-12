<script setup lang="ts">
</script>

<template>
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
