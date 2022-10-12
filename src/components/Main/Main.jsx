import { useState } from "react"
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton"
import { TodoCounter } from "../TodoCounter/TodoCounter"
import { TodoItem } from "../TodoItem/TodoItem"
import { TodoList } from "../TodoList/TodoList"
import { TodoSearch } from "../TodoSearch/TodoSearch"

const defaultTasks = [
    {name: "Estudiar react", completed: false},
    {name: "Estudiar typescript", completed: false},
    {name: "Leer un libro", completed: false},
    {name: "Asistir a charla", completed: false},
  ]

export const Main = () => {
  const [tasks, setTasks] = useState(defaultTasks)
  const [searchValue, setSearchValue] = useState("")
  
  const completedTasks = tasks.filter(todo => todo.completed).length
  const totalTasks = tasks.length
  
  let searchedTasks = []

  if(!searchValue.length >= 1){
    searchedTasks = tasks
  }else{
    searchedTasks = tasks.filter(task => {
      const taskText = task.name.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return taskText.includes(searchText)
    })
  }


  return (
    <main className="w-full h-screen flex flex-col items-center py-8  bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
        <TodoCounter
          total={totalTasks}
          completed={completedTasks}
        />   
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}

        />    
        <TodoList>
            {searchedTasks.map(task => {
                return <TodoItem key={task.name} name={task.name} completed={task.completed}   />
            })}
        </TodoList>
        <CreateTodoButton />
    </main>
  )
}
