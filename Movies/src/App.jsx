import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayOut } from "./pages/Layout/AppLayOut";
import { Home } from "./pages/Ui/Home";
import { Contact } from "./pages/Ui/Contact";
import { Movies } from "./pages/Ui/Movies";
import { Error } from "./pages/Ui/Error";
import { getMoviesDate } from "./pages/api/getMoviesData";
import { MoviesPage } from "./pages/Ui/MoviesPage";
import { getMovieData } from "./pages/api/getMovieData";
import { getFormData } from "./pages/api/getFormData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayOut />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: getFormData
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: getMoviesDate,
        },
        {
          path: "/movies/:imdbID",
          element: <MoviesPage />,
          loader: getMovieData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
