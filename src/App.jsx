import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import { ErrorPage, Home } from "./page";
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
        path: "/ourstore",
        element: <h1>This is our store</h1>,
      },
      {
        path: "/brands",
        element: <h1>This is brands</h1>,
      },
      {
        path: "/aboutus",
        element: <h1>This is about us</h1>,
      },
      {
        path: "/contact",
        element: <h1>This is contact</h1>,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
