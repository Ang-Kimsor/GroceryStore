import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Scroll from "./../components/Scroll";
import Loading from "../components/Loading";
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
      {loading ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};

export default Rootlayout;
