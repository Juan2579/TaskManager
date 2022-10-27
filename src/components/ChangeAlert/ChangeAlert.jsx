import { createPortal } from "react-dom"
import { ModalRefresh } from "../ModalRefresh/ModalRefresh"
import { useStorageListener } from "./useStorageListener"

export const ChangeAlert = ({sincronize}) => {
    const {show, toggleShow} = useStorageListener(sincronize)

    if(show){
        return createPortal(
            <div className="bg-[rgba(32,35,41,.8)] fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] flex justify-center items-center z-20">
                <ModalRefresh toggleShow={toggleShow} />
            </div>,
            document.getElementById("modalRefresh")
        )
    }else{
        return null
    }
}