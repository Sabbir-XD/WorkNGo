import React, { useContext, useState } from "react";
import { MdClose, MdCloudUpload, MdPerson } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";

const EditProfile = ({ onClose }) => {
  const { user, handleUpdateProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    displayName: user.displayName || "",
    photoURL: user.photoURL || ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.displayName.trim()) newErrors.displayName = "Name is required";
    if (formData.photoURL && !/^https?:\/\/.+\..+/.test(formData.photoURL)) {
      newErrors.photoURL = "Please enter a valid URL";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      await handleUpdateProfile({
        displayName: formData.displayName,
        photoURL: formData.photoURL || null
      });
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl"
        >
          <div className="bg-green-500 px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Edit Profile</h2>
            <button onClick={onClose} className="text-white hover:text-green-200">
              <MdClose size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                {formData.photoURL ? (
                  <img
                    src={formData.photoURL}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover border-4 border-green-100"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center border-4 border-green-100">
                    <MdPerson className="text-green-400 text-4xl" />
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500">
                {formData.photoURL ? "Profile preview" : "No image selected"}
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Photo URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <MdCloudUpload className="text-gray-400" />
                </div>
                <input
                  type="url"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  placeholder="https://example.com/photo.jpg"
                  className={`pl-10 w-full px-4 py-2 rounded-lg border ${
                    errors.photoURL ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                />
              </div>
              {errors.photoURL && (
                <p className="mt-1 text-sm text-red-600">{errors.photoURL}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.displayName ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-green-500 focus:border-green-500`}
              />
              {errors.displayName && (
                <p className="mt-1 text-sm text-red-600">{errors.displayName}</p>
              )}
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 text-white rounded-lg ${
                  isSubmitting ? "bg-green-400" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {isSubmitting ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EditProfile;