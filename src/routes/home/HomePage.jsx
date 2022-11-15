//hooks
import { useTasks } from "../../hooks/useTasks"

//components
import { TodoHeader } from "../../components/TodoHeader/TodoHeader"
import { TodoCounter } from "../../components/TodoCounter/TodoCounter"
import { TodoSearch } from "../../components/TodoSearch/TodoSearch"
import { TodoList } from "../../components/TodoList/TodoList"
import { TodoItem } from "../../components/TodoItem/TodoItem"
import { CreateTodoButton } from "../../components/CreateTodoButton/CreateTodoButton"
import { Modal } from "../../components/Modal/Modal"
import { TodoForm } from "../../components/TodoForm/TodoForm"
import { TodoEmpty } from "../../components/TodoEmpty/TodoEmpty"
import { TodoLoading } from "../../components/TodoLoading/TodoLoading"
import { ChangeAlert } from "../../components/ChangeAlert/ChangeAlert"

export const HomePage = () => {

  const {
    error,
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
    setUncompleted,

    totalTasks,
    completedTasks,

    searchValue, 
    setSearchValue,

    sincronizeTasks
} = useTasks()

return (
  <main className="w-full h-auto flex flex-col items-center pt-8 pb-32  bg-gradient-to-r from-[#74ebd5] to-[#acb6e5] lg:pb-40 dark:from-[#000428] dark:to-[#004e92]">

      <TodoHeader>
        <TodoCounter loading={loading} totalTasks={totalTasks} completedTasks={completedTasks} tasks={tasks}/> 
        {!!tasks.length  && <TodoSearch loading={loading} searchValue={searchValue} setSearchValue={setSearchValue}  />}
      </TodoHeader>  
      
      <TodoList 
        error={error}
        loading={loading} 

        searchedTasks={searchedTasks}
        tasks={tasks} 
        
        all={all}
        setAll={setAll} 

        completed={completed}
        setCompleted={setCompleted} 

        uncompleted={uncompleted}
        setUncompleted={setUncompleted}

        onError={() => <p>There was an error, try again!</p>} 
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <TodoEmpty setAll={setAll} setCompleted={setCompleted} setUncompleted={setUncompleted} searchValue={searchValue}  searchedTasks={searchedTasks} />}
        render= {task => {
          return <TodoItem 
          key={task.id} 
          name={task.name} 
          completed={task.completed}
          onComplete={() => completeTask(task.id)}
          onDelete={() => deleteTask(task.id)}
          />
        }}
      />

      {openModal
          ? <Modal>
                  <TodoForm 
                  tasks = {tasks}
                  setOpenModal = {setOpenModal}
                  addTask = {addTask}
                  setAll = {setAll}
                  setCompleted = {setCompleted}
                  setUncompleted = {setUncompleted}
                  ></TodoForm>
            </Modal>
          : null    
      }

      <CreateTodoButton
      openModal = {openModal}
      setOpenModal = {setOpenModal}
      />

      <ChangeAlert 
        sincronize={sincronizeTasks}
      />
  </main>
)
}