import { useState } from "react";

export const TodoForm = ({addTask, setOpenModal}) => {

    const [newTaskValue, setNewTaskValue] = useState("")

    const onChange = (event) => {
        setNewTaskValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(!newTaskValue == ""){
            addTask(newTaskValue)
            setOpenModal(false)
        }
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    return (
        <form
            onSubmit={onSubmit} 
            style={{boxShadow: "0 8px 32px 0 rgb(31 38 135 / 37%"}} 
            className="min-w-[288px] min-h-[400px] flex flex-col items-center gap-5 fixed px-5 py-8 shadow-xl rounded-lg bg-[#90D2DD] border-2 border-white z-10 backdrop-blur-lg lg:min-w-[500px] lg:gap-12 lg:py-12">
            <h2 
                className="text-transparent bg-clip-text text-2xl font-bold bg-gradient-to-r from-[#27566c] to-[#676bc3] lg:text-4xl">
                Create a New Task!
            </h2>
            <input
                value={newTaskValue}
                onChange={onChange} 
                className="w-56 h-10 pl-4 outline-none rounded-2xl shadow-lg lg:w-64 lg:h-12" placeholder="Task name..." type="text" />
            <button 
                type="submit" 
                className="min-w-[190px] max-w-[260px] h-[55px] rounded-lg px-5 py-2 text-[#365b7a] font-medium text-lg bg-cyan-100 border-2 border-white shadow-lg lg:min-w-[290px] lg:text-xl">
                Add Task
            </button>
            <button
                onClick={onCancel} 
                type="button" 
                className="w-10 h-10 absolute bottom-5 right-5 bg-teal-100 rounded-full shadow-lg text-2xl font-bold text-sky-500">
                X
            </button>
        </form>
    )
}