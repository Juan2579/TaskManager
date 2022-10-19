export const TodoCounter = ({total, completed}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 pb-5">
        <h1 className="text-transparent bg-clip-text text-3xl font-bold bg-gradient-to-r from-[#27566c] to-[#676bc3] lg:text-5xl">Your Tasks</h1>
        <h2 className="font-bold text-gray-600 lg:text-xl">You have completed {completed} of {total} tasks</h2>
    </section>
  )
}
