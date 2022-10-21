import { AppUI } from "./App/AppUI"
import { TaskProvider } from "./todoContext"

export const App = () => {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  )
}



