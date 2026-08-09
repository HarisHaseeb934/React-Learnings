import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./components/UI/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/country",
        element: <Country/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ]
  }
])

const App = () => {
  return <RouterProvider router = {router}/>
}

export default App;