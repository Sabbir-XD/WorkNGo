import {
  FaTasks,
  FaPenAlt,
  FaCalendarAlt,
  FaWallet,
  FaPlus,
} from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
import React from "react";
import { useLoaderData } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateTask = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, category, description, deadline, budget } =
    useLoaderData();

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

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(`https://assaignment-10-server-livid.vercel.app/tasks/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Task Updated Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 mt-6 mb-5 sm:mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50">
      <Helmet>
        <title>WorkNGo | Update Task</title>
      </Helmet>
      {/* Header */}
      <div className="flex items-center mb-6">
        <HiOutlineClipboardList className="text-emerald-600 dark:text-emerald-400 text-2xl sm:text-3xl mr-3" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
          Update Task
        </h2>
      </div>

      <form onSubmit={handleUpdateTask} className="space-y-4 sm:space-y-5">
        {/* Task Title */}
        <div className="space-y-1">
          <label className="flex items-center text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
            <FaTasks className="mr-2 text-emerald-500 dark:text-emerald-400" />
            Task Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="e.g. Need a logo designer"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Category Dropdown */}
        <div className="space-y-1">
          <label className="flex items-center text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
            <FaPenAlt className="mr-2 text-emerald-500 dark:text-emerald-400" />
            Category
          </label>
          <div className="relative">
            <select
              name="category"
              defaultValue={category}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 outline-none transition pr-8 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
          <label className="flex items-center text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
            <FaPenAlt className="mr-2 text-emerald-500 dark:text-emerald-400" />
            Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            placeholder="Describe what needs to be done in detail..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Deadline & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="space-y-1">
            <label className="flex items-center text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 text-emerald-500 dark:text-emerald-400" />
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              defaultValue={deadline}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="space-y-1">
            <label className="flex items-center text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              <FaWallet className="mr-2 text-emerald-500 dark:text-emerald-400" />
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              defaultValue={budget}
              placeholder="e.g. 50"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* User Info (Read Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="space-y-1">
            <label className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={user.displayName}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center py-2 sm:py-3 px-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800 text-white font-medium rounded-lg shadow-md transition duration-200"
        >
          <FaPlus className="mr-2" />
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;