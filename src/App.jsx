import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
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
  Address,
  Reset,
  Cookie,
  Term,
  Privacy,
} from "./page";
import Rootlayout from "./layout/Rootlayout";
import ErrorLayout from "./layout/ErrorLayout";
import UserLayout from "./layout/UserLayout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <ErrorLayout />,
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
        path: "ResetPassword",
        element: <Reset dashboard={false} />,
      },
      {
        path: "Cookie",
        element: <Cookie />,
      },
      {
        path: "Terms-Conditions",
        element: <Term />,
      },
      {
        path: "Privacy-Policy",
        element: <Privacy />,
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
          {
            path: "Address",
            element: <Address />,
          },
        ],
      },
      {
        path: "UserDashboard/ResetPassword",
        element: <Reset dashboard={true} />,
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
