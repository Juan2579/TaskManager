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
import { TodoEmpty } from "../components/TodoEmpty/TodoEmpty"
import { TodoLoading } from "../components/TodoLoading/TodoLoading"


export const AppUI = () => {
    const {error,
        loading,
        searchedTasks,
        completeTask,
        tasks,
        deleteTask,
        openModal,
        setOpenModal,
        addTask
    } = useContext(TaskContext)
    return (
        <main className="w-full h-auto flex flex-col items-center pt-8 pb-32  bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">

            <TodoCounter tasks={tasks}/>   
            {!!tasks.length  && <TodoSearch/>}
            
            <TodoList tasks={tasks}>
                {error ? <p>There was an error, try again!</p> : null}
                {loading ? <TodoLoading /> : null}
                {!loading && !searchedTasks.length ?  <TodoEmpty /> : null}
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

            {openModal
                ? <Modal>
                        <TodoForm 
                        tasks = {tasks}
                        setOpenModal = {setOpenModal}
                        addTask = {addTask}
                        ></TodoForm>
                  </Modal>
                : null    
            }

            <CreateTodoButton
            openModal = {openModal}
            setOpenModal = {setOpenModal}
            />
        </main>
    )
}