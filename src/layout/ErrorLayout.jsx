import { Suspense, useEffect, lazy } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import Loading from "../components/Loading";
import { Outlet, useLocation } from "react-router-dom";
const Error = lazy(() => import("../components/Error"));
const ErrorLayout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Scroll />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
      <Outlet />
      <Footer />
    </>
  );
};

export default ErrorLayout;
