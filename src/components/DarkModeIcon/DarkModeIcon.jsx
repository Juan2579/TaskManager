import { useState } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage"
export const DarkModeIcon = () => {
  const app = document.querySelector("html")  

  const {item: dark, saveItem} = useLocalStorage("DarkMode", false, 0)
 
  const toggleDarkMode = () => { 
       app.classList.toggle("dark")
       if(dark === true){
        saveItem(false)
       }else{
        saveItem(true)
       }
    }
  
    if(dark === true){
        app.classList.add("dark")
    }else if(dark === false){
        app.classList.remove("dark")
    }
  return (
    <button className="pr-5" onClick={toggleDarkMode}>
        {
            dark 
                ? 
                <svg className="w-10 fill-current text-cyan-800 dark:text-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.4 365.4">
                    <g>
                        <g>
                            <path d="M57.4,181.8c0-5.699-3.8-9.6-9.6-9.6H9.6c-5.7,0-9.6,5.7-9.6,9.6c0,5.7,3.8,9.601,9.6,9.601h38.2
                                C53.6,191.3,57.4,187.5,57.4,181.8z"/>
                            <path d="M80.4,269.7l-26.8,26.8c-3.8,3.8-3.8,9.601,0,13.4c3.8,3.8,9.6,3.8,13.4,0l26.8-26.8c3.8-3.801,3.8-9.601,0-13.4
                                C90,267.8,84.2,265.9,80.4,269.7z"/>
                            <path d="M283.101,93.8L309.9,67c3.8-3.8,3.8-9.6,0-13.4c-3.8-3.8-9.601-3.8-13.4,0l-26.8,26.8c-3.8,3.8-3.8,9.6,0,13.4
                                C273.601,97.6,281.2,97.6,283.101,93.8z"/>
                            <path d="M181.8,57.4c5.7,0,9.601-3.8,9.601-9.6V9.6c0-5.7-3.8-9.6-9.601-9.6c-3.8,0-9.6,3.8-9.6,9.6v38.2
                                C172.2,53.6,177.9,57.4,181.8,57.4z"/>
                            <path d="M80.4,93.8c3.8,3.8,9.6,3.8,13.4,0c3.8-3.8,3.8-9.6,0-13.4L67,53.6c-3.8-3.8-9.6-3.8-13.4,0c-3.8,3.8-3.8,9.6,0,13.4
                                L80.4,93.8z"/>
                            <path d="M181.8,308c-5.699,0-9.6,3.8-9.6,9.601V355.8c0,5.7,3.8,9.601,9.6,9.601c5.801,0,9.601-3.8,9.601-9.601v-38.199
                                C191.3,311.8,187.5,308,181.8,308z"/>
                            <path d="M355.8,172.2h-38.199c-5.7,0-9.601,3.8-9.601,9.6c0,5.801,3.8,9.601,9.601,9.601H355.8c5.7,0,9.601-3.8,9.601-9.601
                                C365.4,177.9,359.601,172.2,355.8,172.2z"/>
                            <path d="M283.101,269.7c-3.801-3.8-9.601-3.8-13.4,0s-3.8,9.6,0,13.4l26.8,26.8c3.8,3.8,9.601,3.8,13.4,0s3.8-9.601,0-13.4
                                L283.101,269.7z"/>
                            <circle cx="181.8" cy="181.8" r="105.2"/>
                        </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>

                    </g>
                </svg>
                
                : 
                <svg className="w-10 fill-current text-cyan-800 dark:text-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                 viewBox="0 0 792 792">
                    <g>
                        <g id="_x31_0_7_">
                            <g>
                                <path d="M402.336,396c0-170.8,110.855-315.909,265.914-371.473C624.765,8.935,577.986,0,528.957,0
                                C305.167,0,123.75,177.309,123.75,396c0,218.716,181.417,396,405.207,396c49.029,0,95.808-8.935,139.293-24.527
                                C513.191,711.909,402.336,566.8,402.336,396z"/>
                    </g>
                            </g>
                        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg> 
        }
    </button>
  )
}
