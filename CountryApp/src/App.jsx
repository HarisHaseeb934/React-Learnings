import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "contact",
            element: <Contact/>
        },
        {
            path: "about",
            element: <About/>
        },
        {
            path: "country",
            element: <Country/>
        },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
