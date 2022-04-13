import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Index from './pages/Index.vue'
import Todo from './pages/Todo.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Index },
  { path: '/todo', component: Todo }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router