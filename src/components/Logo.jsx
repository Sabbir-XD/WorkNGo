import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold"
    >
      <img
        src={logo}
        className="w-8 md:w-12 -mr-1 md:-mr-2 rounded-full"
        alt="Logo"
      />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
        orkNGo
      </span>
    </Link>
  );
};

export default Logo;
