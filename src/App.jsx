import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import {
  ErrorPage,
  Home,
  OurStore,
  DetailProduct,
  Login,
  Register,
  Career,
  About,
  Contact,
  Cart,
} from "./page";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/OurStore",
        element: <OurStore />,
      },
      {
        path: "/OurStore/:category/:name",
        element: <DetailProduct />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Career",
        element: <Career />,
      },
      {
        path: "/AboutUs",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
