export const CreateTodoButton = ({setOpenModal, openModal}) => {
  const createTask = (event) => {
    event.stopPropagation()

    if(!openModal){
      setOpenModal(true)
    }else{
      setOpenModal(false)
    }
}
  return (
    <button type="button" className="w-16 bg-teal-100 rounded-full fixed bottom-5 right-5 shadow-lg z-10 duration-500 hover:rotate-45 lg:right-56 dark:bg-[#0865b6]"
    onClick={createTask}
    >
      <svg className="w-16 fill-current text-sky-500 dark:text-white" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z"/>
      </svg>
    </button>
  )
}
