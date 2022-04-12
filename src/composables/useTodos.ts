import { useUserStore } from "../stores/user";

export interface Todo {
  title: string;
  done: boolean;
  author: string;
}

export function useTodos() {
  const userStore = useUserStore()

  const initialTodo: Todo = {
    title: '',
    done: false,
    author: ''
  }
  
  const todos = ref<Array<Todo>>([])
  const newTask = ref({ ...initialTodo })
  
  const addNewTask = () => {
    // les objets sont passés par référénce
    // le destructuring permet de créer une copie de l'objet
    todos.value.push({ ...newTask.value, author: userStore.user })
    newTask.value = { ...initialTodo }
  }

  return {
    todos, newTask, addNewTask
  }
}