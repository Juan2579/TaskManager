import { createPortal } from "react-dom"


export const Modal = ( {children}) => {
    return createPortal(
        <div className="bg-[rgba(32,35,41,.8)] fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] flex justify-center items-center z-0">
            {children}
        </div>,
        document.getElementById("modal")
    )
}