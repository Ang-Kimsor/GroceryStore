import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Rootlayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [location.pathname]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Scroll />
      <Navbar />
      <Suspense key={location.pathname} fallback={<Loading />}>
        <Outlet />
        <div
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="size-[50px] bg-[#59C491] z-[100] fixed bottom-5 right-5 cursor-pointer flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-white text-xl" />
        </div>
      </Suspense>
      <Footer />
    </>
  );
};

export default Rootlayout;
