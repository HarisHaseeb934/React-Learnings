import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from "./Components/Pages/Layout/AppLayout"
import ErrorPage from "./Components/Pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {

      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App