export const TodoItem = (props) => {
  return (
    <li className="w-72 h-12 flex items-center justify-between px-3 bg-white rounded-xl">
        <input type="checkbox" name="" id="" />
        <p>{props.name}</p>
        <span>X</span>
    </li>
  )
}
