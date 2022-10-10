import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton"
import { TodoCounter } from "../TodoCounter/TodoCounter"
import { TodoItem } from "../TodoItem/TodoItem"
import { TodoList } from "../TodoList/TodoList"
import { TodoSearch } from "../TodoSearch/TodoSearch"

const tasks = [
    {name: "Estudiar react", completed: false},
    {name: "Estudiar typescript", completed: false},
    {name: "Leer un libro", completed: false},
  ]

export const Main = () => {
  return (
    <main className="bg-gray-100">
        <TodoCounter/>   
        <TodoSearch/>    
        <TodoList>
            {tasks.map(task => {
                return <TodoItem key={task.name} name={task.name}  />
            })}
        </TodoList>
        <CreateTodoButton />
    </main>
  )
}
