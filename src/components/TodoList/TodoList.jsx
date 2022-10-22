export const TodoList = ({tasks, children, loading, searchedTasks, all, setAll, completed, setCompleted, uncompleted, setUncompleted}) => {
    return (
    <section className="flex flex-col justify-center items-center gap-6">
        <ul className={`flex flex-col justify-center items-center gap-4 ${tasks.length > 1 && 'lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center'} lg:gap-8`}>
            {children}
            
        </ul>
        {
          !loading && searchedTasks.length >= 1 ? 
           <div className="w-full flex gap-3 justify-between">
            <button onClick={() => {
                setAll(true)
                setCompleted(false)
                setUncompleted(false)
            }} className={`min-w-[90px] max-w-[120px] h-[35px] rounded-lg px-3 py-2 text-[#365b7a] font-medium text-sm bg-cyan-100 ${all && 'bg-blue-800 text-white pointer-events-none'} border-2 border-white shadow-lg duration-500 hover:bg-blue-800 hover:text-white lg:min-w-[200px] lg:h-[45px] lg:text-xl`}>All</button>
            <button onClick={() => {
                setAll(false)
                setCompleted(true)
                setUncompleted(false)
            }} className={`min-w-[90px] max-w-[120px] h-[35px] rounded-lg px-3 py-2 text-[#365b7a] font-medium text-sm bg-cyan-100 ${completed && 'bg-blue-800 text-white pointer-events-none'} border-2 border-white shadow-lg duration-500 hover:bg-blue-800 hover:text-white lg:min-w-[200px] lg:h-[45px] lg:text-xl`}>Completed</button>
            <button onClick={() => {
                setAll(false)
                setCompleted(false)
                setUncompleted(true)
            }}  className={`min-w-[90px] max-w-[120px] h-[35px] rounded-lg px-2 py-2 text-[#365b7a] font-medium text-sm bg-cyan-100 ${uncompleted && 'bg-blue-800 text-white pointer-events-none'} border-2 border-white shadow-lg duration-500 hover:bg-blue-800 hover:text-white lg:min-w-[200px] lg:h-[45px] lg:text-xl`}>Uncompleted</button>
            </div> 
           : null
        }
        
    </section>
  )
}
