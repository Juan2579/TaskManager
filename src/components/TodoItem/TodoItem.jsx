export const TodoItem = (props) => {
    console.log(props)
  return (
    <li>
        <span>C</span>
        <p>{props.name}</p>
        <span>X</span>
    </li>
  )
}
