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

  //add post
  const handleAddTasks = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Data:", data);

    // Example: Send coffeeData to your server or API
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
              title: "Tasks Added Successfully!",
              icon: "success",
              draggable: true,
              timer: 2000,
            });
          form.reset();
      }
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-5 mb-5 md:mb-10 md:mt-10 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex items-center mb-6">
        <HiOutlineClipboardList className="text-emerald-600 text-3xl mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Post a New Task</h2>
      </div>

      <form onSubmit={handleAddTasks} className="space-y-5">
        {/* Task Title */}
        <div className="space-y-1">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaTasks className="mr-2 text-emerald-500" />
            Task Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Need a logo designer"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
          />
        </div>

        {/* Category Dropdown */}
        <div className="space-y-1">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaPenAlt className="mr-2 text-emerald-500" />
            Category
          </label>
          <div className="relative">
            <select
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition pr-8"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <RiArrowDownSLine className="absolute right-3 top-3 text-gray-500 text-xl pointer-events-none" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaPenAlt className="mr-2 text-emerald-500" />
            Description
          </label>
          <textarea
            name="description"
            placeholder="Describe what needs to be done in detail..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
          />
        </div>

        {/* Deadline & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaCalendarAlt className="mr-2 text-emerald-500" />
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
          </div>
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaWallet className="mr-2 text-emerald-500" />
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              placeholder="e.g. 50"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
          </div>
        </div>

        {/* User Info (Read Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={user.displayName}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-700"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-700"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center py-3 px-4 bg-green-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md transition duration-200"
        >
          <FaPlus className="mr-2" />
          Post Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
