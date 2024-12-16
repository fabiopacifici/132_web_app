import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import AppLayout from "./layouts/AppLayout"
import BooksPage from "./pages/BooksPage"
import SingleBook from "./pages/SingleBook"
import NotFound from "./components/NotFound"
import GlobalContext from './contexts/GlobalContext'



function App() {

  // define the state variable
  const [loading, setLoading] = useState(false);

  // define the value to pass to the context
  const values = {
    loading,
    setLoading

  }



  return (
    <>

      <GlobalContext.Provider value={values}>
        {/* All routes here */}
        <BrowserRouter>
          <Routes>

            <Route element={<AppLayout />}>
              <Route index element={<BooksPage />} />
              <Route path="books/:id" element={<SingleBook />} />

              <Route path="*" element={<NotFound />} />

            </Route>

          </Routes>
        </BrowserRouter>

      </GlobalContext.Provider>

    </>
  )
}

export default App
