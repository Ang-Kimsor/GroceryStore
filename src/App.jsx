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
  Payment,
  PaymentStatus,
  TrackOrder,
  TrackOrderDetail,
  Wishlist,
  AccountInfomation,
} from "./page";
import UserLayout from "./layout/UserLayout";
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
        path: "OurStore",
        element: <OurStore />,
      },
      {
        path: "OurStore/:category/:name",
        element: <DetailProduct />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "Career",
        element: <Career />,
      },
      {
        path: "AboutUs",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Cart",
        element: <Cart dashboard={false} />,
      },
      {
        path: "Cart/Payment",
        element: <Payment />,
      },
      {
        path: "Cart/Payment/PaymentStatus",
        element: <PaymentStatus />,
      },
      {
        path: "TrackOrder",
        element: <TrackOrder dashboard={false} />,
      },
      {
        path: "TrackOrder/Detail",
        element: <TrackOrderDetail dashboard={false} />,
      },
      {
        path: "Wishlist",
        element: <Wishlist dashboard={false} />,
      },
      {
        path: "UserDashboard",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <AccountInfomation />,
          },
          {
            path: "TrackOrder",
            element: <TrackOrder dashboard={true} />,
          },
          {
            path: "TrackOrder/Detail",
            element: <TrackOrderDetail dashboard={true} />,
          },
          {
            path: "Wishlist",
            element: <Wishlist dashboard={true} />,
          },
        ],
      },
      {
        path: "UserDashboard/Cart",
        element: <Cart dashboard={true} />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
