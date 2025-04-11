import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Error from "./../components/Error";
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
