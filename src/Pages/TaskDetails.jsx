import React, { useContext, useEffect, useState } from "react";
import {
  FaCode,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaMoneyBillWave,
  FaArrowLeft,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const TaskDetails = () => {
  const task = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bidCount, setBidCount] = useState(0);

  useEffect(() => {
    setBidCount(task?.bidsCount || 0);
  }, [task]);

  const handlePlaceBid = async () => {
    try {
      const response = await fetch(
        `https://assaignment-10-server-livid.vercel.app/tasks/${task._id}/increment-bid`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: user.displayName }),
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        setBidCount(bidCount + 1);
        toast.success("✅ Your bid was placed successfully!");
      } else {
        if (data.message === "Already bid") {
          toast("⚠️ You have already placed a bid with this Account.");
        } else {
          toast.error(data.message || " Failed to place bid.");
        }
      }
    } catch (error) {
      console.error("Error placing bid:", error);
      toast.error(" Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <Helmet>
        <title>WorkNGo | Task Details</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        {/* ✅ Bid count message */}
        <div className="text-center mb-6">
          <p className="text-green-700 dark:text-emerald-400 text-lg font-medium">
            You bid for <span className="font-bold">{bidCount}</span>{" "}
            opportunities.
          </p>
        </div>

        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-green-600 hover:text-green-800 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Tasks
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-900/50 transition-colors duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-emerald-600 dark:to-green-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4">
                  <FaCode className="text-2xl" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold capitalize">
                    {task.title}
                  </h1>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-white bg-opacity-20 rounded-full">
                    {task.category}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold">${task.budget}</span>
                <span className="block text-sm opacity-80">Project Budget</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 dark:bg-emerald-400 rounded-full mr-2"></span>
                Project Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {task.description}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Deadline */}
              <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-5 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="text-green-500 dark:text-emerald-400 mr-3" />
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Deadline</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-8">
                  {new Date(task.deadline).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* Budget */}
              <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-5 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <FaMoneyBillWave className="text-green-500 dark:text-emerald-400 mr-3" />
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Budget</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-8">
                  ${task.budget} (Fixed Price)
                </p>
              </div>

              {/* Client */}
              <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-5 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <FaUser className="text-green-500 dark:text-emerald-400 mr-3" />
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Client</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-8 capitalize">{task.userName}</p>
              </div>

              {/* Contact */}
              <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-5 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-green-500 dark:text-emerald-400 mr-3" />
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Contact</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-8">{task.userEmail}</p>
              </div>
            </div>

            {/* ✅ Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={handlePlaceBid} 
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 dark:from-emerald-600 dark:to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-green-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Place a Bid
              </button>

              <button className="flex-1 bg-white dark:bg-gray-800 border border-green-500 dark:border-emerald-500 text-green-600 dark:text-emerald-400 py-3 px-6 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;