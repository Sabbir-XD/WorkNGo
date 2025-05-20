import React from 'react';
import { FaCode, FaCalendarAlt, FaUser, FaEnvelope, FaMoneyBillWave, FaArrowLeft } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {
  const task = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <button onClick={() => window.history.back()} className="flex items-center text-green-600 hover:text-green-800 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Tasks
          </button>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4">
                  <FaCode className="text-2xl" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
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
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Project Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{task.description}</p>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Deadline */}
              <div className="bg-green-50 rounded-xl p-5">
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="text-green-500 mr-3" />
                  <h3 className="font-medium text-gray-800">Deadline</h3>
                </div>
                <p className="text-gray-700 pl-8">
                  {new Date(task.deadline).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              {/* Budget */}
              <div className="bg-green-50 rounded-xl p-5">
                <div className="flex items-center mb-2">
                  <FaMoneyBillWave className="text-green-500 mr-3" />
                  <h3 className="font-medium text-gray-800">Budget</h3>
                </div>
                <p className="text-gray-700 pl-8">${task.budget} (Fixed Price)</p>
              </div>

              {/* Client */}
              <div className="bg-green-50 rounded-xl p-5">
                <div className="flex items-center mb-2">
                  <FaUser className="text-green-500 mr-3" />
                  <h3 className="font-medium text-gray-800">Client</h3>
                </div>
                <p className="text-gray-700 pl-8 capitalize">{task.userName}</p>
              </div>

              {/* Contact */}
              <div className="bg-green-50 rounded-xl p-5">
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-green-500 mr-3" />
                  <h3 className="font-medium text-gray-800">Contact</h3>
                </div>
                <p className="text-gray-700 pl-8">{task.userEmail}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                Apply for this Project
              </button>
              <button className="flex-1 bg-white border border-green-500 text-green-600 py-3 px-6 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center">
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