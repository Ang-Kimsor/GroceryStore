import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Scroll from "./../components/Scroll";
const Rootlayout = () => {
  return (
    <>
      <Scroll />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
