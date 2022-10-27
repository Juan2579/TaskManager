import { useEffect, useState } from "react"

export const useStorageListener = (sincronize) => {
    const [storageChange, setStorageChange] = useState(false)

    const toggleShow = () => {
        sincronize()
        setStorageChange(false)
    }

    useEffect(() => {
        const onChange = (change) => {
            if(change.key === "TASKS_V1"){
                console.log("Hubo cambios en TASKS_V1")
                setStorageChange(true)
            }
        }
            
        window.addEventListener("storage", onChange)

        return () => {
            window.removeEventListener("storage", onChange)
        }
    }, [])
         
    return {
        show: storageChange,    
        toggleShow
    }
    }
