import { HashRouter, Routes, Route } from "react-router-dom"
import { EditTaskPage } from "../routes/edit/EditTaskPage"
import { HomePage } from "../routes/home/HomePage"
import { NotFoundPage } from "../routes/notFound/NotFoundPage"


export const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}