import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaCamera,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Signup = () => {
  const { handleCreateUser, handleGoogleLogin, handleUpdateProfile, setUser, setLoading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, photo, name } = Object.fromEntries(
      formData.entries()
    );

    // Use Password Validation
    const error = validatePassword(password);
    if (error) {
      Swal.fire("Error", error, "error");
      return;
    }

    handleCreateUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        handleUpdateProfile({ displayName: name, photoURL: photo });
        setUser({ ...user, displayName: name, photoURL: photo });

        Swal.fire({
          title: "Account Created Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate(location?.state || "/");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  // Moved outside for better structure
  const validatePassword = (password) => {
    if (password.length < 6)
      return "❌ Password must be at least 6 characters.";
    if (!/[A-Z]/.test(password))
      return "❌ Password must have at least one uppercase letter.";
    if (!/[a-z]/.test(password))
      return "❌ Password must have at least one lowercase letter.";
    return null;
  };
  //Google login
  const handleGoogle = () => {
    handleGoogleLogin()
      .then((result) => {
        console.log(result);
        toast.success("✅ Logged in with Google!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("❌ Google login failed.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2">
            Join workNGo
          </h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="text"
                  name="name"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="email"
                  name="email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Photo (Optional)
              </label>
              <div className="relative">
                <FaCamera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="text"
                  name="photo"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="https://example.com/your-photo.jpg"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-green-500" />
                  ) : (
                    <FaEye className="text-green-500" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Create Account
            </button>
          </form>

          {/* OAuth Buttons */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleGoogle}
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <FaGoogle className="text-red-500 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <FaGithub className="text-gray-800 mr-2" />
                GitHub
              </button>
            </div>
          </div>

          {/* Login Redirect */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 hover:text-green-800"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
