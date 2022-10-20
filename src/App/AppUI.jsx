//hooks
import { useContext } from "react"

//provider
import { TaskContext } from "../todoContext"

//components
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton"
import { TodoCounter } from "../components/TodoCounter/TodoCounter"
import { TodoItem } from "../components/TodoItem/TodoItem"
import { TodoList } from "../components/TodoList/TodoList"
import { TodoSearch } from "../components/TodoSearch/TodoSearch"


export const AppUI = () => {
    const {error,
        loading,
        searchedTasks,
        completeTask,
        deleteTask,
        addTask
    } = useContext(TaskContext)
    return (
        <main className="w-full h-screen flex flex-col items-center py-8  bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
            <TodoCounter/>   
            <TodoSearch/>    
            <TodoList>
                {error && <p>Desesperate hubo un error</p>}
                {loading && <p className="font-bold text-gray-600 lg:text-xl">Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTasks.length) && <p className="font-bold text-gray-600 lg:text-xl">Create your first task!</p>}
                {searchedTasks.map(task => {
                    return <TodoItem 
                    key={task.name} 
                    name={task.name} 
                    completed={task.completed}
                    onComplete={() => completeTask(task.name)}
                    onDelete={() => deleteTask(task.name)}
                    />
                })
                }
            </TodoList> 
            <CreateTodoButton
            addTask={(taskName) => addTask(taskName)}
            />
        </main>
    )
}