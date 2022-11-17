import { info } from "autoprefixer";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTasks = () => {
    const {item: tasks,
        saveItem: saveTasks,
        sincronizeItem: sincronizeTasks,
        loading,
        error
    } = useLocalStorage("TASKS_V2", [], 2000)

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

    const completeTask = (id) => {
        const taskIndex = tasks.findIndex(task => task.id === id)

        const newTasks = [...tasks]
   
        if(!newTasks[taskIndex].completed){
            newTasks[taskIndex].completed = true
        }else{
            newTasks[taskIndex].completed = false
        }

        saveTasks(newTasks)
    }
    const editTask = (id, newText) => {
        const taskIndex = tasks.findIndex(task => task.id === id)

        const newTasks = [...tasks]

        newTasks[taskIndex].name = newText

        saveTasks(newTasks)
    }

    const deleteTask = (id) => {
        const taskIndex = tasks.findIndex(task => task.id == id)

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
            const id = newTaskId(tasks)
            const newTasks = [...tasks]
            newTasks.push({name: taskName, completed: false, id})
            saveTasks(newTasks)
        }
    }
    const getTask = (id) => {
        const taskIndex = tasks.findIndex(task => task.id === id)
        return tasks[taskIndex]
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
            addTask,
            editTask,
            getTask,

            openModal,
            setOpenModal,

            all,
            setAll,
            completed,
            setCompleted,
            uncompleted,
            setUncompleted,
            sincronizeTasks
    }
}

const newTaskId = (taskList) => {
    if(!taskList.length){
        return 1;
    }
    const idList = taskList.map(task => task.id)
    const idMax = Math.max(...idList)
    return idMax + 1
}