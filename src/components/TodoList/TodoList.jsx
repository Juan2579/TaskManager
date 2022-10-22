export const TodoList = ({tasks, children}) => {
    return (
    <section>
        <ul className={`flex flex-col justify-center items-center gap-4 ${tasks.length > 1 && 'lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center'} lg:gap-8`}>
            {children}
        </ul>
    </section>
  )
}
