export const TodoList = ({
    //props
    error,
    loading, 
    tasks,
    children, 
    searchedTasks, 
    all, 
    setAll, 
    completed, 
    setCompleted, 
    uncompleted, 
    setUncompleted,

    //render props
    onError,
    onLoading,
    onEmptyTodos,
    render
}) => {

    
    return (
    <section className="flex flex-col justify-center items-center gap-6">

        {/* Onloads states */}

        {error && onError()}
        {loading && onLoading()}
        {(!loading && !searchedTasks.length) && onEmptyTodos()}

        

        {/*Empty Completed tasks renderings */}
        
        {
            completed && searchedTasks.filter(task => task.completed).length < 1 ? <p className="font-bold text-gray-600 lg:text-xl dark:text-gray-300">You have not completed tasks yet</p> : null
        }

        {/*Empty Uncompleted tasks renderings */}
        
        {
            uncompleted && !searchedTasks.filter(task => !task.completed).length ? <p className="font-bold text-gray-600 lg:text-xl dark:text-gray-300">You have not uncompleted tasks</p> : null
        }

        <ul className={`flex flex-col justify-center items-center gap-4 ${tasks.length > 1 && 'lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center'} lg:gap-8`}>
            {/* Rendering */}

            {
                all && searchedTasks.map(render)
            }
            {
                completed && searchedTasks.filter(task => task.completed).map(render)
            }
            {
                uncompleted && searchedTasks.filter(task => !task.completed).map(render)
            }         
        </ul>
        {
          !loading && searchedTasks.length >= 1 ? 
           <div className="w-full flex gap-3 justify-between">
            <button onClick={() => {
                setAll(true)
                setCompleted(false)
                setUncompleted(false)
            }} className={`min-w-[90px] max-w-[120px] h-[35px] rounded-lg px-3 py-2 text-[#365b7a] font-medium text-sm bg-cyan-100 ${all ? 'bg-blue-800 text-white pointer-events-none dark:bg-[#00082E]' : 'dark:bg-[#0865b6]'} border-2 border-white shadow-lg duration-500 hover:bg-blue-800 hover:text-white lg:min-w-[200px] lg:h-[45px] lg:text-xl dark:text-white dark:hover:bg-[#00082E]`}>All</button>
            <button onClick={() => {
                setAll(false)
                setCompleted(true)
                setUncompleted(false)
            }} className={`min-w-[90px] max-w-[120px] h-[35px] rounded-lg px-3 py-2 text-[#365b7a] font-medium text-sm bg-cyan-100 ${completed ? 'bg-blue-800 text-white pointer-events-none dark:bg-[#00082E]' : 'dark:bg-[#0865b6]'} border-2 border-white shadow-lg duration-500 hover:bg-blue-800 hover:text-white lg:min-w-[200px] lg:h-[45px] lg:text-xl dark:text-white dark:hover:bg-[#00082E]`}>Completed</button>
            <button onClick={() => {
                setAll(false)
                setCompleted(false)
                setUncompleted(true)
            }}  className={`min-w-[90px] max-w-[120px] h-[35px] rounded-lg px-2 py-2 text-[#365b7a] font-medium text-sm bg-cyan-100 ${uncompleted ? 'bg-blue-800 text-white pointer-events-none dark:bg-[#00082E]' : 'dark:bg-[#0865b6]'} border-2 border-white shadow-lg duration-500 hover:bg-blue-800 hover:text-white lg:min-w-[200px] lg:h-[45px] lg:text-xl dark:text-white dark:hover:bg-[#00082E]`}>Uncompleted</button>
            </div> 
           : null
        }
        
    </section>
  )
}
