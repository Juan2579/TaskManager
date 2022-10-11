export const TodoList = (props) => {
    return (
    <section>
        <ul className="flex flex-col gap-4">
            {props.children}
        </ul>
    </section>
  )
}
