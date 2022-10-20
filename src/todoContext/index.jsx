import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const {item: tasks,
        saveItem: saveTasks,
        loading,
        error
    } = useLocalStorage("TASKS_V1", [])
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
    })}

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
        <TaskContext.Provider value={{
            error,
            loading,
            totalTasks,
            completedTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            completeTask,
            deleteTask,
            addTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}