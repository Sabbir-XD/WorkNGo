import { FiClock, FiDollarSign, FiUser, FiCalendar } from "react-icons/fi";
import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router";

const FeaturedTaskCard = ({ task }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const daysRemaining = () => {
    const deadline = new Date(task.deadline);
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 ? `${diffDays}d left` : "Expired";
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Category ribbon */}
      <div className="bg-green-50 px-4 py-2 flex items-center">
        <FaLanguage className="text-green-600 mr-2" />
        <span className="text-sm font-medium text-green-800">
          {task.category}
        </span>
      </div>

      {/* Main content */}
      <div className="p-4">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg mr-3">
              <FiUser className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Client</p>
              <p className="text-sm font-medium">{task.userName}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg mr-3">
              <FiDollarSign className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Budget</p>
              <p className="text-sm font-medium">${task.budget}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg mr-3">
              <FiCalendar className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Deadline</p>
              <p className="text-sm font-medium">{formatDate(task.deadline)}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg mr-3">
              <FiClock className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Status</p>
              <p
                className={`text-sm font-medium ${
                  daysRemaining().includes("Expired")
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {daysRemaining()}
              </p>
            </div>
          </div>
        </div>

        {/* Action button */}
        <Link
          to={`/task/${task._id}`}
          className="btn mt-4 w-full py-2 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-md transition-colors text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTaskCard;
