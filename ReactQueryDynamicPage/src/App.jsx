import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/Layout/AppLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { FetchRq } from "./pages/FetchRQ";
import { PostPage } from "./pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/rq",
        element: <FetchRq/>,
      },
      {
        path: "/rq/:id",
        element: <PostPage/>,
      },
    ]
  }
])

const App = () => {
  const qc = new QueryClient();
  return(
    <QueryClientProvider client={qc}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App;