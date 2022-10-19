import { useState } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton"
import { TodoCounter } from "./components/TodoCounter/TodoCounter"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { TodoList } from "./components/TodoList/TodoList"
import { TodoSearch } from "./components/TodoSearch/TodoSearch"


export const App = () => {

  const [tasks, saveTasks] = useLocalStorage("TASKS_V1", [])
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

    saveTasks(newTasks)
  }
  const deleteTask = (name) => {
    const taskIndex = tasks.findIndex(task => task.name == name)

    const newTasks = [...tasks]
    newTasks.splice(taskIndex, 1)

    saveTasks(newTasks)
  }

  const addTask = (taskName) => {

    if(!tasks.some(task => {
      const storageTaskComparation = task.name.toLowerCase()
      const newTaskComparison = taskName.toLowerCase()
      return storageTaskComparation === newTaskComparison
    })){
      const newTasks = [...tasks]
      newTasks.push({name: taskName, completed: false})
      saveTasks(newTasks)
    }

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
        <CreateTodoButton
          addTask={(taskName) => addTask(taskName)}
        />
    </main>
  )
}




