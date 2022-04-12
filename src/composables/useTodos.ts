export interface Todo {
  title: string;
  done: boolean;
}

export function useTodos() {
  const initialTodo: Todo = {
    title: '',
    done: false,
  }
  
  const todos = ref<Array<Todo>>([])
  const newTask = ref({ ...initialTodo })
  
  const addNewTask = () => {
    // les objets sont passés par référénce
    // le destructuring permet de créer une copie de l'objet
    todos.value.push({ ...newTask.value })
    newTask.value = { ...initialTodo }
  }

  return {
    todos, newTask, addNewTask
  }
}