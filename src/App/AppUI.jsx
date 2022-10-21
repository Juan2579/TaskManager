//hooks
import { useContext } from "react"

//provider
import { TaskContext } from "../todoContext"

//components
import { TodoCounter } from "../components/TodoCounter/TodoCounter"
import { TodoSearch } from "../components/TodoSearch/TodoSearch"
import { TodoList } from "../components/TodoList/TodoList"
import { TodoItem } from "../components/TodoItem/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton"
import { Modal } from "../components/Modal/Modal"
import { TodoForm } from "../components/TodoForm/TodoForm"



export const AppUI = () => {
    const {error,
        loading,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
        addTask
    } = useContext(TaskContext)
    return (
        <main className="w-full h-screen flex flex-col items-center py-8  bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
            <TodoCounter/>   
            <TodoSearch/>    
            <TodoList>
                {error && <p>There was an error, try again!</p>}
                {loading && <p className="font-bold text-gray-600 lg:text-xl">Loading your tasks...</p>}
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

            {openModal && (
                <Modal>
                    <TodoForm 
                    setOpenModal = {setOpenModal}
                    addTask = {addTask}
                    ></TodoForm>
                </Modal>
            )}

            <CreateTodoButton
            openModal = {openModal}
            setOpenModal = {setOpenModal}
            />
        </main>
    )
}