import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import { ErrorPage, Home, OurStore, DetailProduct } from "./page";
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
        path: "/Brands",
        element: <h1>This is brands</h1>,
      },
      {
        path: "/AboutUs",
        element: <h1>This is about us</h1>,
      },
      {
        path: "/Contact",
        element: <h1>This is contact</h1>,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
