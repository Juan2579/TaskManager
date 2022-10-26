import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTasks = () => {
    const {item: tasks,
        saveItem: saveTasks,
        loading,
        error
    } = useLocalStorage("TASKS_V1", [])

    const [searchValue, setSearchValue] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [all, setAll] = useState(true)
    const [completed, setCompleted] = useState(false)
    const [uncompleted, setUncompleted] = useState(false)
 
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

    
    return {
            error,
            loading,
            tasks,
            totalTasks,
            completedTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal,
            addTask,
            all,
            setAll,
            completed,
            setCompleted,
            uncompleted,
            setUncompleted
    }
}