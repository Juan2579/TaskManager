export const TodoList = (props) => {
    return (
    <section>
        <ul className="flex flex-col gap-4 lg:gap-8">
            {props.children}
        </ul>
    </section>
  )
}
