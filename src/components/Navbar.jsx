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
  const { isDark, toggleTheme } = useContext(ThemeContext);

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
        <button
          onClick={toggleTheme}
          className="btn btn-sm md:btn-md px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-600"
          aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
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
