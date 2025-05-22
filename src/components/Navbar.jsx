import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpg";
import {
  FaHome,
  FaPlusCircle,
  FaSearch,
  FaTasks,
  FaUser,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { Tooltip } from "react-tooltip";
import { ThemeContext } from "../Theme/ThemeContext";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const { handleToggle } = useContext(ThemeContext);
  console.log(handleToggle);

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded transition ${
      isActive
        ? "bg-green-100 text-green-700 font-medium dark:bg-green-700 dark:text-white"
        : "text-gray-600 hover:bg-green-50 hover:text-green-600 dark:text-gray-300 dark:hover:bg-green-800 dark:hover:text-white"
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-task" className={navLinkStyle}>
          <FaPlusCircle /> Add Task
        </NavLink>
      </li>
      <li>
        <NavLink to="/browse-tasks" className={navLinkStyle}>
          <FaSearch /> Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-tasks" className={navLinkStyle}>
          <FaTasks /> My Posted Tasks
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white dark:bg-gray-900 border-b border-green-100 dark:border-green-800 shadow-sm transition">
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
            className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-green-100 dark:border-green-700"
          >
            {links}
          </ul>
        </div>
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
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Theme toggle button */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input onChange={handleToggle} type="checkbox" />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <div className="flex items-center gap-4">
            <div>
              <div
                className="avatar my-anchor-element"
                data-tooltip-id="user-tooltip"
                place="top"
              >
                <div className="w-10 rounded-full ring ring-green-300 ring-offset-base-100 ring-offset-2 cursor-pointer z-10">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                    }
                    alt="User Profile"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <Tooltip
                id="user-tooltip"
                clickable
                place="top"
                className="z-50"
                render={() => (
                  <div className="flex flex-col items-start p-2 text-sm">
                    <p className="font-medium mb-1">
                      {user.displayName || user.email}
                    </p>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-xs bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 border-none mt-1"
                    >
                      <FaSignOutAlt className="mr-1" /> Log out
                    </button>
                  </div>
                )}
              />
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline btn-sm md:btn-md border-green-500 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500"
            >
              <FaUser className="mr-1" /> Sign In
            </Link>
            <Link
              to="/register"
              className="btn btn-sm md:btn-md bg-gradient-to-r from-green-500 to-green-600 text-white border-none hover:from-green-600 hover:to-green-700"
            >
              <FaUserPlus className="mr-1" /> Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
