import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FetchOld } from "./pages/FetchOld";
import { Home } from "./pages/Home";
import { FetchRQ } from "./pages/FetchRQ";
import { MainLayout } from "./components/Layout/MainLayout";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/old",
        element: <FetchOld />,
      },
      {
        path: "/query",
        element: <FetchRQ />,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
        <RouterProvider router = {router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
