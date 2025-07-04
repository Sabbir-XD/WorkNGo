import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router";
import {
  FaSearch,
  FaCalendarAlt,
  FaCode,
  FaPalette,
  FaPen,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    minBudget: "",
    maxBudget: "",
  });
  const searchInputRef = useRef(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://assaignment-10-server-livid.vercel.app/tasks");
        const data = await response.json();
        setTasks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };
    fetchTasks();
  }, [setLoading]);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = filters.category
      ? task.category === filters.category
      : true;
    const matchesMinBudget = filters.minBudget
      ? task.budget >= Number(filters.minBudget)
      : true;
    const matchesMaxBudget = filters.maxBudget
      ? task.budget <= Number(filters.maxBudget)
      : true;

    return (
      matchesSearch && matchesCategory && matchesMinBudget && matchesMaxBudget
    );
  });

  const categories = [...new Set(tasks.map((task) => task.category))];

  const getCategoryIcon = (category) => {
    const iconStyle = "text-2xl p-2 rounded-lg bg-opacity-20";

    switch (category) {
      case "Web Development":
        return <FaCode className={`${iconStyle} bg-gray-400 text-white dark:bg-gray-600 dark:text-emerald-300`} />;
      case "Design":
        return (
          <FaPalette className={`${iconStyle} bg-purple-500 text-purple-600 dark:bg-purple-600 dark:text-purple-300`} />
        );
      case "Writing":
        return (
          <FaPen className={`${iconStyle} bg-yellow-500 text-yellow-600 dark:bg-yellow-600 dark:text-yellow-300`} />
        );
      case "Marketing":
        return (
          <FaChartLine className={`${iconStyle} bg-red-500 text-red-600 dark:bg-red-600 dark:text-red-300`} />
        );
      case "Mobile Development":
        return (
          <FaMobileAlt
            className={`${iconStyle} bg-orange-500 text-orange-600 dark:bg-orange-600 dark:text-orange-300`}
          />
        );
      default:
        return <FaCode className={`${iconStyle} bg-gray-500 text-gray-600 dark:bg-gray-600 dark:text-gray-300`} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Browse Tasks</title>
      </Helmet>
      {/* Hero Section */}
      <div className="mb-12 text-center relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 py-12 px-6 shadow-xl">
        <div className="absolute inset-0 bg-noise opacity-20 dark:opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Task
          </h1>
          <p className="text-xl text-green-100 dark:text-emerald-100 max-w-2xl mx-auto">
            Browse through thousands of tasks that match your skills and
            expertise
          </p>
        </div>
      </div>

      {/* Search and Filter - Glassmorphism Design */}
      <div className="mb-12 backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-6 border border-white/20 dark:border-gray-700 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              ref={searchInputRef}
              placeholder="Search tasks by keywords..."
              className="pl-10 pr-4 py-3 w-full border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-500 dark:focus:ring-emerald-500 focus:border-green-500 dark:focus:border-emerald-500 outline-none transition-all duration-200 bg-white/50 dark:bg-gray-700/50 shadow-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 dark:focus:ring-emerald-500 focus:border-green-500 dark:focus:border-emerald-500 outline-none transition-all duration-200 bg-white/50 dark:bg-gray-700 shadow-sm text-gray-900 dark:text-gray-200"
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Min Budget ($)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">$</span>
              <input
                type="number"
                className="w-full pl-8 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 dark:focus:ring-emerald-500 focus:border-green-500 dark:focus:border-emerald-500 outline-none transition-all duration-200 bg-white/50 dark:bg-gray-700/50 shadow-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="100"
                value={filters.minBudget}
                onChange={(e) =>
                  setFilters({ ...filters, minBudget: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Max Budget ($)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">$</span>
              <input
                type="number"
                className="w-full pl-8 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 dark:focus:ring-emerald-500 focus:border-green-500 dark:focus:border-emerald-500 outline-none transition-all duration-200 bg-white/50 dark:bg-gray-700/50 shadow-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="5000"
                value={filters.maxBudget}
                onChange={(e) =>
                  setFilters({ ...filters, maxBudget: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex items-end">
            <button
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={() =>
                setFilters({
                  category: "",
                  minBudget: "",
                  maxBudget: "",
                })
              }
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 dark:border-emerald-500"></div>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="text-center py-16">
          <div className="mx-auto w-48 h-48 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <FaSearch className="text-6xl text-green-400 dark:text-emerald-400 opacity-80" />
          </div>
          <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-2">
            No tasks found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Try adjusting your search criteria or check back later for new tasks
          </p>
          <button
            className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 dark:from-emerald-600 dark:to-green-600 dark:hover:from-emerald-700 dark:hover:to-green-700 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg"
            onClick={() => {
              setSearchTerm("");
              setFilters({
                category: "",
                minBudget: "",
                maxBudget: "",
              });
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <div
              key={task._id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:hover:shadow-gray-800/50 transition-all duration-300 border-0 group relative"
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-500 dark:from-emerald-500 dark:to-green-600"></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 bg-green-50 text-green-600 dark:bg-gray-700 dark:text-emerald-300 rounded-lg">
                      {getCategoryIcon(task.category)}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 dark:text-emerald-300 dark:bg-gray-700 rounded-full">
                        {task.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 dark:from-emerald-400 dark:to-green-500">
                      ${task.budget}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Budget
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-green-700 dark:group-hover:text-emerald-400 transition-colors">
                  {task.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-5">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-2 text-green-500 dark:text-emerald-400" />
                    <span>
                      deadline:{" "}
                      {new Date(task.deadline).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-gray-700 flex items-center justify-center mr-2">
                      <span className="text-xs font-medium text-green-700 dark:text-emerald-300">
                        {task.userName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{task.userName}</div>
                  </div>
                  <Link
                    to={`/task/${task._id}`}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 dark:from-emerald-600 dark:to-green-600 dark:hover:from-emerald-700 dark:hover:to-green-700 text-white rounded-lg text-sm font-medium transition-all shadow hover:shadow-md group-hover:scale-105 transform"
                  >
                    View Details{" "}
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => {
            searchInputRef.current.focus();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="w-14 h-14 bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl transition-colors hover:scale-110 transform transition-transform"
        >
          <FaSearch className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default BrowseTasks;