export const CreateTodoButton = ({addTask}) => {
  const createTask = (event) => {
    event.stopPropagation()
    const modal = document.createElement('div');
    modal.id = "modal"
    modal.className = "min-w-[288px] min-h-[400px] flex flex-col items-center gap-5 fixed top-[calc(400px - 60%)] px-5 py-8 shadow-xl rounded-lg bg-[rgb(144 210 221)] border-2 border-white lg:min-w-[500px] lg:gap-12 lg:py-12"
    modal.style = `
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%); 
    backdrop-filter: blur( 30.5px );`

    const modalTitle = document.createElement('h2');
    modalTitle.className = "text-transparent bg-clip-text text-2xl font-bold bg-gradient-to-r from-[#27566c] to-[#676bc3] lg:text-4xl"
    modalTitle.textContent = "Create a New Task!"

    const inputTaskName = document.createElement('input');
    inputTaskName.className = "w-56 h-10 pl-4 outline-none rounded-2xl shadow-lg lg:w-64 lg:h-12"
    inputTaskName.placeholder = "Task name..."

    const addTaskButton = document.createElement("button")
    addTaskButton.className = "min-w-[190px] max-w-[260px] h-[55px] rounded-lg px-5 py-2 text-[#365b7a] font-medium text-lg bg-cyan-100 border-2 border-white shadow-lg lg:min-w-[290px] lg:text-xl"
    addTaskButton.textContent = "Add Task"
    addTaskButton.addEventListener("click", () => {
      if(!inputTaskName.value == ""){
        addTask(inputTaskName.value)
        modal.remove()
      }
    })
    const closeModal = document.createElement("button")
    closeModal.textContent = "X"
    closeModal.className = "w-10 h-10 absolute bottom-5 right-5 bg-teal-100 rounded-full shadow-lg text-2xl font-bold text-sky-500"
    closeModal.addEventListener("click", () => {
      modal.remove()
    })

  if(document.querySelector("#modal")){
    event.currentTarget.disabled = true
  }else if(!document.querySelector("#modal")){
    modal.append(modalTitle, inputTaskName, addTaskButton, closeModal);
    document.querySelector("#root main").appendChild(modal)
    event.currentTarget.disabled = false
  }
}
  return (
    <button type="button" className="w-16 bg-teal-100 rounded-full fixed bottom-5 right-5 shadow-lg"
    onClick={createTask}
    >
      <svg className="w-16 fill-current text-sky-500" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z"/>
      </svg>
    </button>
  )
}
