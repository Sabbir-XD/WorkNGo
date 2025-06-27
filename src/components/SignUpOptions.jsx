import {
  FaUserTie,
  FaHandshake,
  FaSearchDollar,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router";

const SignUpOptions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-emerald-800 dark:text-emerald-400 mb-12">
          Join Our Platform
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Freelancer Card */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-offset="100"
            className="bg-white dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
                  <FaUserTie className="text-emerald-600 dark:text-emerald-400 text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Sign Up as a Freelancer
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Showcase your skills, connect with buyers, and get hired for
                exciting projects that match your expertise.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaLightbulb className="text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Showcase your portfolio
                  </span>
                </div>
                <div className="flex items-center">
                  <FaHandshake className="text-green-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Connect with potential clients
                  </span>
                </div>
                <div className="flex items-center">
                  <FaSearchDollar className="text-blue-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Find projects that match your skills
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 px-6 py-4">
              <Link
                to="/register"
                className="w-full btn bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Create Freelance Account
              </Link>
            </div>
          </div>

          {/* Buyer Card */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-offset="100"
            className="bg-white dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-full mr-4">
                  <FaHandshake className="text-teal-600 dark:text-teal-400 text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Sign Up as a Buyer
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Post jobs, hire skilled talent, and get your projects completed
                efficiently with our vetted professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaLightbulb className="text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Access top talent worldwide
                  </span>
                </div>
                <div className="flex items-center">
                  <FaHandshake className="text-green-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Manage projects seamlessly
                  </span>
                </div>
                <div className="flex items-center">
                  <FaSearchDollar className="text-blue-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Get quality work on budget
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 px-6 py-4">
              <Link
                to="/register"
                className="w-full btn bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Create Buyer Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpOptions;
