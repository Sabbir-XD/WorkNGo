import React, { useContext, useState } from "react";
import { MdEmail, MdPhone, MdVerified, MdEdit } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import EditProfile from "./EditProfile";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Cover Photo */}
          <div className="h-40 bg-gradient-to-r from-green-500 to-teal-500 relative">
            <div className="absolute -bottom-16 left-6 border-4 border-white dark:border-gray-900 rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-900">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt={user?.displayName || "User"}
                  className="w-32 h-32 object-cover"
                />
              ) : (
                <div className="w-32 h-32 bg-green-100 dark:bg-green-800 flex items-center justify-center">
                  <FiUser className="text-green-500 dark:text-green-300 text-5xl" />
                </div>
              )}
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 px-6 pb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {user?.displayName || "Unnamed User"}
                  </h2>
                  <span
                    className={`p-1 rounded-full ${
                      user?.emailVerified
                        ? "text-green-500 bg-green-50 dark:bg-green-900"
                        : "text-red-500 bg-red-50 dark:bg-red-900"
                    }`}
                  >
                    {user?.emailVerified ? (
                      <MdVerified size={20} />
                    ) : (
                      <VscUnverified size={20} />
                    )}
                  </span>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-6">
                  {user?.emailVerified
                    ? "Verified Account"
                    : "Unverified Account"}
                </p>

                <div className="space-y-3">
                  {user?.email && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MdEmail className="text-green-500 mr-3 text-xl" />
                      <span>{user?.email}</span>
                    </div>
                  )}

                  {user?.phoneNumber && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MdPhone className="text-green-500 mr-3 text-xl" />
                      <span>{user?.phoneNumber}</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-6 md:mt-0 flex items-center justify-center px-5 py-2.5 text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <MdEdit className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && <EditProfile onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default Profile;
