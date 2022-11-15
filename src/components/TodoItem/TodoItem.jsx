export const TodoItem = (props) => {

  return (
    <li className="relative min-w-[288px] max-w-[350px] mx-auto h-12 flex items-center justify-between pl-5 pr-2 bg-white rounded-xl shadow-xl border-2 border-cyan-200 hover:scale-[1.05] lg:min-w-[450px] lg:h-16 dark:bg-[#2166a3]">
        <button onClick={props.onComplete}>
          <svg className={`fill-current ${!props.completed && "text-blue-200 dark:text-white"} ${props.completed && "text-green-400 dark:text-green-500"}  w-6 h-5 hover:scale-[1.2] hover:opacity-70 lg:w-10 lg:h-8`} width="25px" height="20px" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M32,64c17.645,0,32-14.355,32-32S49.645,0,32,0S0,14.355,0,32S14.355,64,32,64z M19.538,30.269l6.954,6.869L43.04,16.72   l5.092,4.491L27.029,47.247L14.953,35.322L19.538,30.269z"/></g>
          </svg>
        </button>
        <p className={`px-5 text-ellipsis whitespace-nowrap overflow-hidden ${props.completed && 'line-through'} lg:text-xl dark:text-white`}>{props.name}</p>
        <div className="flex">
          <button className="pr-3">
            <svg className="fill-current text-gray-900 w-5 h-5  hover:scale-[1.2] hover:opacity-70 lg:w-9 lg:h-9 dark:text-white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" >
              <g>
	              <g>
		              <path d="M8,112V16c0-4.414,3.594-8,8-8h80c4.414,0,8,3.586,8,8v47.031l8-8V16c0-8.836-7.164-16-16-16H16C7.164,0,0,7.164,0,16v96
                  c0,8.836,7.164,16,16,16h44v-8H16C11.594,120,8,116.414,8,112z M88,24H24v8h64V24z M88,40H24v8h64V40z M88,56H24v8h64V56z M24,80
                  h32v-8H24V80z M125.656,72L120,66.344c-1.563-1.563-3.609-2.344-5.656-2.344s-4.094,0.781-5.656,2.344l-34.344,34.344
                  C72.781,102.25,68,108.293,68,110.34L64,128l17.656-4c0,0,8.094-4.781,9.656-6.344l34.344-34.344
                  C128.781,80.188,128.781,75.121,125.656,72z M88.492,114.82c-0.453,0.43-2.02,1.488-3.934,2.707l-10.363-10.363
                  c1.063-1.457,2.246-2.922,2.977-3.648l25.859-25.859l11.313,11.313L88.492,114.82z"/>
                </g>
              </g>
            </svg>
          </button>
          <button>
            <svg onClick={props.onDelete} className="fill-current text-red-700 w-9 h-9 absolute left-[95%] top-[-20px] hover:scale-[1.2] hover:opacity-70 lg:top-[-30px] lg:w-12 lg:h-12 dark:text-red-800" id="Layer_1" version="1.1" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                <g><path d="M67.305,36.442v-8.055c0-0.939-0.762-1.701-1.7-1.701H54.342v-5.524c0-0.938-0.761-1.7-1.699-1.7h-12.75   c-0.939,0-1.701,0.762-1.701,1.7v5.524H26.93c-0.939,0-1.7,0.762-1.7,1.701v8.055c0,0.938,0.761,1.699,1.7,1.699h0.488v34.021   c0,0.938,0.761,1.7,1.699,1.7h29.481c3.595,0,6.52-2.924,6.52-6.518V38.142h0.486C66.543,38.142,67.305,37.381,67.305,36.442z    M41.592,22.862h9.35v3.824h-9.35V22.862z M61.719,67.345c0,1.719-1.4,3.117-3.12,3.117h-27.78v-32.32l30.9,0.002V67.345z    M63.904,34.742H28.629v-4.655h11.264h12.75h11.262V34.742z"/><rect height="19.975" width="3.4" x="36.066" y="44.962"/><rect height="19.975" width="3.4" x="44.566" y="44.962"/><rect height="19.975" width="3.4" x="53.066" y="44.962"/></g>
            </svg>
          </button>
        </div>
    </li>
  )
}
