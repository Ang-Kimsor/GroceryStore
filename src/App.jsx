import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
// Account Page
const Login = lazy(() => import("./page/Account/Login"));
const Register = lazy(() => import("./page/Account/Register"));
const Reset = lazy(() => import("./page/Account/ResetPw"));
// Main page
const About = lazy(() => import("./page/Main/AboutUs"));
const Career = lazy(() => import("./page/Main/Career"));
const Contact = lazy(() => import("./page/Main/Contact"));
const DetailProduct = lazy(() => import("./page/Main/DetailProduct"));
const Home = lazy(() => import("./page/Main/Home"));
const OurStore = lazy(() => import("./page/Main/OurStore"));
// Other
const AccountInfomation = lazy(() => import("./page/Other/AccountInfo"));
const Address = lazy(() => import("./page/Other/Address"));
const Cart = lazy(() => import("./page/Other/Cart"));
const Payment = lazy(() => import("./page/Other/Payment"));
const PaymentStatus = lazy(() => import("./page/Other/PaymentStatus"));
// Policy
const Cookie = lazy(() => import("./page/Policy/Cookie"));
const Privacy = lazy(() => import("./page/Policy/Privacy"));
const Term = lazy(() => import("./page/Policy/TermCondition"));
// Quick link
const TrackOrder = lazy(() => import("./page/QuickLink/TrackingOrder"));
const TrackOrderDetail = lazy(() =>
  import("./page/QuickLink/TrackingOrderDetail")
);
const Wishlist = lazy(() => import("./page/QuickLink/Wishlist"));
// Layout
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
