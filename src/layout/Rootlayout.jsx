import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Scroll from "./../components/Scroll";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Rootlayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <>
      <Scroll />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Outlet />
          <div className="size-[50px] bg-[#59C491] z-[100] fixed bottom-5 right-10 flex items-center justify-center rounded-full">
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-white text-xl"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Rootlayout;
