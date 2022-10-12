import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton"
import { TodoCounter } from "../TodoCounter/TodoCounter"
import { TodoItem } from "../TodoItem/TodoItem"
import { TodoList } from "../TodoList/TodoList"
import { TodoSearch } from "../TodoSearch/TodoSearch"

const tasks = [
    {name: "Estudiar react", completed: false},
    {name: "Estudiar typescript", completed: false},
    {name: "Leer un libro", completed: false},
    {name: "Asistir a charla", completed: false},
  ]

export const Main = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center py-8  bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
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
