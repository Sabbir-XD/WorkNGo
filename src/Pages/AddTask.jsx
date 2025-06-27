import React, { useContext } from "react";
import {
  FaTasks,
  FaCalendarAlt,
  FaWallet,
  FaPenAlt,
  FaPlus,
} from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const categories = [
    "Web Development",
    "Design",
    "Writing",
    "Marketing",
    "Content Creation",
    "Translation",
    "Data Entry",
    "Video Editing",
    "Graphic Design",
    "Social Media",
    "Photo Editing",
  ];

  const handleAddTasks = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch("https://assaignment-10-server-livid.vercel.app/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Tasks Added Successfully!",
            icon: "success",
            draggable: true,
            timer: 2000,
            background: document.documentElement.classList.contains("dark")
              ? "#1f2937"
              : "#fff",
            color: document.documentElement.classList.contains("dark")
              ? "#fff"
              : "#000",
          });
          form.reset();
        }
      });
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="200"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-offset="100"
      className="max-w-2xl mx-auto p-4 sm:p-6 mt-5 mb-10 md:mb-10 md:mt-10 bg-green-50 dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/50"
    >
      <Helmet>
        <title>WorkNGo | Add Task</title>
      </Helmet>
      {/* Header */}
      <div className="flex items-center mb-6">
        <HiOutlineClipboardList className="text-emerald-600 dark:text-emerald-400 text-3xl mr-3" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Post a New Task
        </h2>
      </div>

      <form onSubmit={handleAddTasks} className="space-y-5">
        {/* Task Title */}
        <div className="space-y-1">
          <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaTasks className="mr-2 text-emerald-500" />
            Task Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Need a logo designer"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="space-y-1">
          <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaPenAlt className="mr-2 text-emerald-500" />
            Category
          </label>
          <div className="relative">
            <select
              name="category"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition pr-8 bg-white dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <RiArrowDownSLine className="absolute right-3 top-3 text-gray-500 dark:text-gray-400 text-xl pointer-events-none" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaPenAlt className="mr-2 text-emerald-500" />
            Description
          </label>
          <textarea
            name="description"
            placeholder="Describe what needs to be done in detail..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Deadline & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 text-emerald-500" />
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaWallet className="mr-2 text-emerald-500" />
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              placeholder="e.g. 50"
              min="1"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
        </div>

        {/* User Info (Read Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md transition duration-200 transform hover:scale-[1.02]"
        >
          <FaPlus className="mr-2" />
          Post Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
