import { Outlet, Link, useLocation } from "react-router";
import {
  FaHome,
  FaUser,
  FaCog,
  FaChartLine,
  FaBell,
  FaSearch,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const { handleSignOut } = useContext(AuthContext);

  useEffect(() => {
    if (location.pathname.includes("profile")) {
      setActiveTab("profile");
    } else if (location.pathname.includes("settings")) {
      setActiveTab("settings");
    } else if (location.pathname.includes("add-task")) {
      setActiveTab("add-task");
    } else if (location.pathname.includes("my-tasks")) {
      setActiveTab("my-tasks");
    } else if (location.pathname.includes("analytics")) {
      setActiveTab("analytics");
    } else {
      setActiveTab("dashboard");
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col md:flex-row">
      {/* Topbar - Mobile */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm">
        <Logo />
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100 text-gray-600">
            <FaBell />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full bg-gray-100 text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 w-64 bg-white shadow-lg md:shadow-none transform transition-transform duration-300 ease-in-out 
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} h-full`}
      >
        <div className="p-6 h-full flex flex-col">
          <Logo />
          <div className="hidden md:block mb-8 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === "dashboard"
                      ? "bg-green-50 text-green-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FaHome className="text-lg" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === "profile"
                      ? "bg-green-50 text-green-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FaUser className="text-lg" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/add-task"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === "add-task"
                      ? "bg-green-50 text-green-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FaPlusCircle className="text-lg" />
                  <span>Add Task</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/my-tasks"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === "my-tasks"
                      ? "bg-green-50 text-green-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FaClipboardList className="text-lg" />
                  <span>My Task</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/settings"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === "settings"
                      ? "bg-green-50 text-green-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FaCog className="text-lg" />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/analytics"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === "analytics"
                      ? "bg-green-50 text-green-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FaChartLine className="text-lg" />
                  <span>Analytics</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-3 p-3 w-full rounded-lg text-gray-600 hover:bg-gray-50"
            >
              <IoMdLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar - Desktop */}
        <div className="hidden md:flex items-center justify-between p-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {activeTab.replace(/-/g, " ")}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button className="p-2 relative rounded-full bg-gray-100 text-gray-600">
              <FaBell />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <FaUser />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation - Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3 shadow-lg z-40">
        <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "dashboard" ? "text-green-600" : "text-gray-500"}`}>
          <FaHome size={18} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/dashboard/profile" onClick={() => setIsMobileMenuOpen(false)} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "profile" ? "text-green-600" : "text-gray-500"}`}>
          <FaUser size={18} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link to="/dashboard/add-task" onClick={() => setIsMobileMenuOpen(false)} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "add-task" ? "text-green-600" : "text-gray-500"}`}>
          <FaPlusCircle size={18} />
          <span className="text-xs mt-1">Add</span>
        </Link>
        <Link to="/dashboard/my-tasks" onClick={() => setIsMobileMenuOpen(false)} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "my-tasks" ? "text-green-600" : "text-gray-500"}`}>
          <FaClipboardList size={18} />
          <span className="text-xs mt-1">Tasks</span>
        </Link>
        <Link to="/dashboard/analytics" onClick={() => setIsMobileMenuOpen(false)} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "analytics" ? "text-green-600" : "text-gray-500"}`}>
          <FaChartLine size={18} />
          <span className="text-xs mt-1">Stats</span>
        </Link>
        <Link to="/dashboard/settings" onClick={() => setIsMobileMenuOpen(false)} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "settings" ? "text-green-600" : "text-gray-500"}`}>
          <FaCog size={18} />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
