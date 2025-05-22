import { FiClock, FiDollarSign, FiUser, FiCalendar } from "react-icons/fi";
import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router";

const FeaturedTaskCard = ({ task }) => {
  const getDeadlineStatus = () => {
    const deadline = new Date(task.deadline);
    const today = new Date();
    const diffDays = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: "Expired", class: "text-red-500 dark:text-red-400" };
    if (diffDays === 0) return { text: "Due today", class: "text-amber-500 dark:text-amber-400" };
    if (diffDays <= 3) return { text: `${diffDays}d left`, class: "text-amber-500 dark:text-amber-400" };
    return { text: `${diffDays}d left`, class: "text-green-600 dark:text-green-400" };
  };

  const deadlineStatus = getDeadlineStatus();

  return (
    <div className="w-full bg-white dark:bg-gray-800 mb-5 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-gray-700/50 transition duration-300">
      <div className="p-5 space-y-4">
        {/* Category and deadline */}
        <div className="flex justify-between items-center">
          <div className="inline-flex items-center text-sm font-medium bg-green-50 dark:bg-emerald-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
            <FaLanguage className="mr-2" size={14} />
            {task.category}
          </div>
          <span className={`text-xs font-semibold ${deadlineStatus.class}`}>
            {deadlineStatus.text}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-1">
          {task.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {task.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            <FiUser size={14} className="text-gray-500 dark:text-gray-400" />
            {task.userName}
          </div>
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            <FiDollarSign size={14} className="text-gray-500 dark:text-gray-400" />
            ${task.budget.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            <FiCalendar size={14} className="text-gray-500 dark:text-gray-400" />
            {new Date(task.deadline).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Action button */}
        <Link
          to={`/task/${task._id}`}
          className="block text-center w-full py-2 rounded-md text-white text-sm font-medium bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-emerald-600 dark:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 transition-all duration-300 hover:shadow-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTaskCard;