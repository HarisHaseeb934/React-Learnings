import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppLayout } from "./components/Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { Post } from "./components/UI/Post";
import { Profiles } from "./pages/Profiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/posts",
        element: <Posts/>,
      },
      {
        path: "/posts/:id",
        element: <Post/>,
      },
      {
        path: "/profiles",
        element: <Profiles/>,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router = {router}/>
      </QueryClientProvider>
    </>
  );
};

export default App;
