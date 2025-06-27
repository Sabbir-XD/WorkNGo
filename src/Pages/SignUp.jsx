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
import { Helmet } from "react-helmet";

const Signup = () => {
  const {
    handleCreateUser,
    handleGoogleLogin,
    handleUpdateProfile,
    setUser,
    setLoading,
  } = useContext(AuthContext);
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

        handleUpdateProfile({ displayName: name, photoURL: photo });
        setUser({ ...user, displayName: name, photoURL: photo });

        // ✅ Save user to MongoDB
        const saveUser = {
          name,
          email,
          photoURL: photo || "",
          createdAt: new Date(),
          role: "user",
        };

        fetch("https://assaignment-10-server-livid.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("User saved to MongoDB:", data);
          })
          .catch((err) => {
            // console.error("MongoDB save error:", err);
          });

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

  const validatePassword = (password) => {
    if (password.length < 6)
      return "❌ Password must be at least 6 characters.";
    if (!/[A-Z]/.test(password))
      return "❌ Password must have at least one uppercase letter.";
    if (!/[a-z]/.test(password))
      return "❌ Password must have at least one lowercase letter.";
    return null;
  };

  const handleGoogle = () => {
    handleGoogleLogin()
      .then((result) => {
        const user = result.user;

        // ✅ Save user to MongoDB
        const saveUser = {
          name: user.displayName || "Unknown",
          email: user.email,
          photoURL: user.photoURL || "",
          createdAt: new Date(),
          role: "user",
        };

        fetch("https://assaignment-10-server-livid.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.inserted) {
              toast.success("✅Account created via Google!");
            } else {
              toast("🟡 Logged in (existing user)");
            }
            navigate(location?.state || "/");
          })
          .catch((err) => {
            console.error("MongoDB Save Error:", err);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("❌ Google login failed.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <Helmet>
        <title>workNGo | Sign Up</title>
      </Helmet>
      <div className="w-full max-w-lg mx-auto mb-5">
        <div className="text-center mb-8 pt-5">
          <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">
            Join workNGo
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create your account to get started
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-green-100 dark:border-gray-700">
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 dark:text-green-400" />
                <input
                  type="text"
                  name="name"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 bg-white dark:bg-gray-700"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 dark:text-green-400" />
                <input
                  type="email"
                  name="email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 bg-white dark:bg-gray-700"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Profile Photo (Optional)
              </label>
              <div className="relative">
                <FaCamera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 dark:text-green-400" />
                <input
                  type="text"
                  name="photo"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 bg-white dark:bg-gray-700"
                  placeholder="https://example.com/your-photo.jpg"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 dark:text-green-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 bg-white dark:bg-gray-700"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-green-500 dark:text-green-400" />
                  ) : (
                    <FaEye className="text-green-500 dark:text-green-400" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
            >
              Create Account
            </button>
          </form>

          {/* OAuth Buttons */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleGoogle}
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FaGoogle className="text-red-500 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FaGithub className="text-gray-800 dark:text-gray-100 mr-2" />
                GitHub
              </button>
            </div>
          </div>

          {/* Login Redirect */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
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
