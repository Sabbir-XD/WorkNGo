import { FiClock, FiDollarSign, FiUser, FiCalendar } from "react-icons/fi";
import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router";

const FeaturedTaskCard = ({ task }) => {
  const getDeadlineStatus = () => {
    const deadline = new Date(task.deadline);
    const today = new Date();
    const diffDays = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: "Expired", class: "text-red-500" };
    if (diffDays === 0) return { text: "Due today", class: "text-amber-500" };
    if (diffDays <= 3) return { text: `${diffDays}d left`, class: "text-amber-500" };
    return { text: `${diffDays}d left`, class: "text-green-600" };
  };

  const deadlineStatus = getDeadlineStatus();

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      <div className="p-5 space-y-4">
        {/* Category and deadline */}
        <div className="flex justify-between items-center">
          <div className="inline-flex items-center text-sm font-medium bg-green-50 text-green-700 px-3 py-1 rounded-full">
            <FaLanguage className="mr-2" size={14} />
            {task.category}
          </div>
          <span className={`text-xs font-semibold ${deadlineStatus.class}`}>
            {deadlineStatus.text}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
          {task.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {task.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-700">
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
            <FiUser size={14} className="text-gray-500" />
            {task.userName}
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
            <FiDollarSign size={14} className="text-gray-500" />
            ${task.budget}
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
            <FiCalendar size={14} className="text-gray-500" />
            {new Date(task.deadline).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Action button */}
        <Link
          to={`/task/${task._id}`}
          className="block text-center w-full py-2 rounded-md text-white text-sm font-medium bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTaskCard;
