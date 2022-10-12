export const TodoItem = (props) => {
  const onComplete = () => {
    alert("ya completaste el todo " + props.name)
  }
  const onDelete = () => {
    alert("borraste el todo " + props.name)
  }
  return (
    <li className="w-72 mx-auto h-12 flex items-center justify-between px-5 bg-white rounded-xl shadow-xl border-2 border-cyan-100">
        <input type="checkbox" name="" id="" onClick={onComplete}/>
        <p className={`px-5 text-ellipsis whitespace-nowrap overflow-hidden ${props.completed && 'line-through'}`}>{props.name}</p>
        <button onClick={onDelete}>
          <svg className="fill-current text-gray-900" height="40px" id="Layer_1" version="1.1" viewBox="0 0 91 91" width="28px" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M67.305,36.442v-8.055c0-0.939-0.762-1.701-1.7-1.701H54.342v-5.524c0-0.938-0.761-1.7-1.699-1.7h-12.75   c-0.939,0-1.701,0.762-1.701,1.7v5.524H26.93c-0.939,0-1.7,0.762-1.7,1.701v8.055c0,0.938,0.761,1.699,1.7,1.699h0.488v34.021   c0,0.938,0.761,1.7,1.699,1.7h29.481c3.595,0,6.52-2.924,6.52-6.518V38.142h0.486C66.543,38.142,67.305,37.381,67.305,36.442z    M41.592,22.862h9.35v3.824h-9.35V22.862z M61.719,67.345c0,1.719-1.4,3.117-3.12,3.117h-27.78v-32.32l30.9,0.002V67.345z    M63.904,34.742H28.629v-4.655h11.264h12.75h11.262V34.742z"/><rect height="19.975" width="3.4" x="36.066" y="44.962"/><rect height="19.975" width="3.4" x="44.566" y="44.962"/><rect height="19.975" width="3.4" x="53.066" y="44.962"/></g>
          </svg>
        </button>
    </li>
  )
}
