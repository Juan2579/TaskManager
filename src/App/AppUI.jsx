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
        addTask,
        all,
        setAll,
        completed,
        setCompleted,
        uncompleted,
        setUncompleted
    } = useContext(TaskContext)
    return (
        <main className="w-full h-auto flex flex-col items-center pt-8 pb-32  bg-gradient-to-r from-[#74ebd5] to-[#acb6e5] dark:from-[#000428] dark:to-[#004e92]">

            <TodoCounter tasks={tasks}/>   
            {!!tasks.length  && <TodoSearch/>}
            
            <TodoList 
                searchedTasks={searchedTasks} 
                loading={loading} 
                tasks={tasks} 
                all={all}
                setAll={setAll} 
                completed={completed}
                setCompleted={setCompleted} 
                uncompleted={uncompleted}
                setUncompleted={setUncompleted}
            >

                {error ? <p>There was an error, try again!</p> : null}
                {loading ? <TodoLoading /> : null}
                {!loading && !searchedTasks.length ?  <TodoEmpty setAll={setAll} setCompleted={setCompleted} setUncompleted={setUncompleted}  /> : null}
                {all ? searchedTasks.map(task => {
                    return <TodoItem 
                    key={task.name} 
                    name={task.name} 
                    completed={task.completed}
                    onComplete={() => completeTask(task.name)}
                    onDelete={() => deleteTask(task.name)}
                    />
                }) : null
                }
                {
                  completed ? searchedTasks.filter(task => task.completed).map(task => {
                    return <TodoItem 
                    key={task.name} 
                    name={task.name} 
                    completed={task.completed}
                    onComplete={() => completeTask(task.name)}
                    onDelete={() => deleteTask(task.name)}
                    />
                  }) : null  
                }
                {
                  completed && searchedTasks.filter(task => task.completed).length < 1 ? <p className="font-bold text-gray-600 lg:text-xl dark:text-gray-300">You have not completed tasks yet</p> : null
                }
                {
                  uncompleted ? searchedTasks.filter(task => !task.completed).map(task => {
                    return <TodoItem 
                    key={task.name} 
                    name={task.name} 
                    completed={task.completed}
                    onComplete={() => completeTask(task.name)}
                    onDelete={() => deleteTask(task.name)}
                    />
                  }) : null
                }
                {
                  uncompleted && !searchedTasks.filter(task => !task.completed).length ? <p className="font-bold text-gray-600 lg:text-xl dark:text-gray-300">You have not uncompleted tasks</p> : null
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