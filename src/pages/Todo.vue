<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted(() => console.log(route.fullPath))
</script>

<template>
  <button w:bg="yellow-200" @click="router.back">retour arriere</button>
  <TodoList />
</template>