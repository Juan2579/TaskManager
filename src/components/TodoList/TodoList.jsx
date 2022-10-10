export const TodoList = (props) => {
    console.log(props)
    console.log(props.children)
    return (
    <section>
        <ul>
            {props.children}
        </ul>
    </section>
  )
}
