import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer/>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default Root;
