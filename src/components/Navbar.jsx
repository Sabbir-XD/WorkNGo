import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.jpg";
import { FaHome, FaPlusCircle, FaSearch, FaTasks, FaUser, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/Home" className="hover:bg-green-50 hover:text-green-600">
          <FaHome className="text-lg" /> Home
        </Link>
      </li>
      <li>
        <Link to="/add-task" className="hover:bg-green-50 hover:text-green-600">
          <FaPlusCircle className="text-lg" /> Add Task
        </Link>
      </li>
      <li>
        <Link to="/browse-tasks" className="hover:bg-green-50 hover:text-green-600">
          <FaSearch className="text-lg" /> Browse Tasks
        </Link>
      </li>
      <li>
        <Link to="/my-tasks" className="hover:bg-green-50 hover:text-green-600">
          <FaTasks className="text-lg" /> My Posted Tasks
        </Link>
      </li>
    </>
  );
  
  return (
    <div className="navbar bg-white border-b border-green-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-green-100"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold">
          <img src={logo} className="w-8 md:w-12 -mr-1 md:-mr-2 rounded-full" alt="Logo" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
            orkNGo
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/login" className="btn btn-outline btn-sm md:btn-md border-green-500 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500">
          <FaUser className="mr-1" /> Sign In
        </Link>
        <Link to="/register" className="btn btn-sm md:btn-md bg-gradient-to-r from-green-500 to-green-600 text-white border-none hover:from-green-600 hover:to-green-700">
          <FaUserPlus className="mr-1" /> Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;