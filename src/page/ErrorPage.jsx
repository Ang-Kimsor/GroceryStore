import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import Error from "./../component/Error";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Error />
      <Outlet />
      <Footer />
    </>
  );
};

export default ErrorPage;
