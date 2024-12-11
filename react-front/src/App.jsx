import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import BooksPage from "./pages/BooksPage"
import SingleBook from "./pages/SingleBook"


function App() {


  return (
    <>
      {/* All routes here */}
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />}>
            <Route index element={<BooksPage />} />
            <Route path="books/:id" element={<SingleBook />} />
            <Route path="*" element={<h1>Page Not found</h1>} />

          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
