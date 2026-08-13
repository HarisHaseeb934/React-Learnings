import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Home } from "./practice/NavLinkPractice/Home";
// import { Products } from "./practice/NavLinkPractice/Products";
// import { About } from "./practice/NavLinkPractice/About";
// import { AppLayout } from "./components/layout/AppLayout";
// import { Contact } from "./pages/Contact";
// import { Movies } from "./pages/Movies";
import { Admin, AdminLayout, Settings } from "./practice/Nested Dashboard/AdminLayout";
// import { ErrorPage } from "./practice/ErrorHandling/ErrorPage";
import { ErrorPage } from "./practice/Navigate/ErrorPage";
import { CustomPage } from "./practice/ErrorHandling/CustomPage";
// import { ErrorPage2 } from "./practice/ErrorHandling/ErrorPage2";

import { AppLayout } from "./practice/Movies/Applayout";
import {Movies} from "./practice/Movies/Movies";
import {Home} from "./practice/Movies/Home";
import {Contact, getFormData} from "./practice/Movies/Contact";
import {Error} from "./practice/Movies/Error";
import { getData } from "./practice/Movies/getData";
import { getMovieData } from "./practice/Movies/getMovieData";
import { MoviesDetail } from "./practice/Movies/MoviesDetail";
import { UserPage, UserProfile } from "./practice/DynamicNavigation";




export const App = () => {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <AppLayout/>,
    //   children:[
    //     {
    //       path: "/",
    //       element: <Home/>
    //     },
    //     {
    //       path: "/about",
    //       element: <About/>
    //     },
    //     {
    //       path: "/contact",
    //       element: <Contact/>
    //     },
    //     {
    //       path: "/movies",
    //       element: <Movies/>
    //     },
    //   ]
    // }

    // {
    //   path: "/",
    //   element: <Home/>
    // },
    // {
    //   path: "/product",
    //   element: <Products/>
    // },
    // {
    //   path: "/about",
    //   element: <About/>
    // }

//     {
//       path: "/admin",
//       element: <AdminLayout/>,
//       errorElement: <ErrorPage />,
//       children:[
//         {
//           path: "/admin",
//           element: <Admin/>
//         },
//         {
//           path: "/admin/settings",
//           element: <Settings/>
//         },
//         // {
//         //   path: "*",
//         //   element: <CustomPage />,
//         // }
//       ]
//     }

    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/movies",
          element: <Movies/>,
          loader: getData,
        },
        {
          path: "/movies/:imdbID",
          element: <MoviesDetail/>,
          loader: getMovieData,
        },
        {
          path: "/contact",
          element: <Contact/>,
          action: getFormData,
        },
      ]
    }

    // {
    //   path: "/user",
    //   element: <UserPage />,
    // },
    // {
    //   path: "/user/:id",
    //   element: <UserProfile />,
    // }
  ]);
  return <RouterProvider router={router} />;
};

// [
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ];

// Old Way

// createRoutesFromElements(
//   <>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//   </>,
// );
