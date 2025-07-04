import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaHeadset,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50 to-green-100  dark:from-black dark:to-black py-12 md:py-16 border-t border-green-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                className="w-10 h-10 -mr-1 rounded-full"
                alt="orkNGo Logo"
              />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
                orkNGo
              </span>
            </div>
            <p className="text-gray-700 dark:text-green-800 text-sm">
              Connecting skilled freelancers with clients for quick task
              completion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/browse-tasks" className="text-gray-600 dark:text-green-800 hover:text-gray-800 transition">
                  Browse Tasks
                </Link>
              </li>
              <li>
                <Link to="/dashboard/add-task" className="text-gray-600 dark:text-green-800 hover:text-gray-800 transition">
                  Post a Task
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-green-800 hover:text-gray-800 transition">
                  Freelancer Dashboard
                </Link>
              </li>
              <li>
                <a href="#works" className="text-gray-600 dark:text-green-800 hover:text-gray-800 transition">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-green-800 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="text-gray-600 dark:text-green-800 mr-2" />
                <a
                  href="mailto:contact@orkngo.com"
                  className="text-gray-600 hover:text-green-800 transition"
                >
                  contact@Workngo.com
                </a>
              </li>
              <li className="flex items-center">
                <FaHeadset className="text-gray-600 mr-2" />
                <a
                  href="#"
                  className="text-gray-600 dark:text-green-800 hover:text-green-800 transition"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-green-800 mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://x.com/"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/sabbir.xd.f"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/sabbir-xd/"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-800 mb-2">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-green-800 hover:text-gray-800 transition text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-green-800 hover:text-gray-800 transition text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-200 mt-8 pt-8 text-center text-green-600 text-sm">
          © {new Date().getFullYear()} WorkNGo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
