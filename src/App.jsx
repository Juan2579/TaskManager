import { useState } from "react"
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton"
import { TodoCounter } from "./components/TodoCounter/TodoCounter"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { TodoList } from "./components/TodoList/TodoList"
import { TodoSearch } from "./components/TodoSearch/TodoSearch"

const defaultTasks = [
    {name: "Estudiar react", completed: false},
    {name: "Estudiar typescript", completed: false},
    {name: "Leer un libro", completed: false},
    {name: "Asistir a charla", completed: false},
  ]

export const App = () => {

  const localStorageTasks = localStorage.getItem("TASKS_V1")
  let parsedTasks

  if(!localStorageTasks) {
    localStorage.setItem("TASKS_V1", JSON.stringify([]))
    parsedTasks = []
  }else{
    parsedTasks = JSON.parse(localStorageTasks)
  }



  const [tasks, setTasks] = useState(parsedTasks)
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

  const completeTask = (name) => {
    const taskIndex = tasks.findIndex(task => task.name == name)

    const newTasks = [...tasks]
    
    if(newTasks[taskIndex].completed === false){
      newTasks[taskIndex].completed = true
    }else{
      newTasks[taskIndex].completed = false
    }

    setTasks(newTasks)
  }
  const deleteTask = (name) => {
    const taskIndex = tasks.findIndex(task => task.name == name)

    const newTasks = [...tasks]
    newTasks.splice(taskIndex, 1)

    setTasks(newTasks)
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
                return <TodoItem 
                key={task.name} 
                name={task.name} 
                completed={task.completed}
                onComplete={() => completeTask(task.name)}
                onDelete={() => deleteTask(task.name)}
                />
            })}
        </TodoList>
        <CreateTodoButton/>
    </main>
  )
}




