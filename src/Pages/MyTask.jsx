import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaEdit,
  FaTrash,
  FaHandshake,
  FaCalendarAlt,
  FaTags,
  FaMoneyBillWave,
  FaSearch,
  FaFilter
} from "react-icons/fa";
import { MdTitle } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router";
import toast from "react-hot-toast";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const initialData = useLoaderData();
  const [tasks, setTasks] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assaignment-10-server-livid.vercel.app/tasks/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Confirm Deletion",
      text: "This task and all associated bids will be permanently removed.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10b981",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Delete Task",
      cancelButtonText: "Cancel",
      background: "#f8fafc",
      backdrop: `
        rgba(16, 185, 129, 0.1)
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assaignment-10-server-livid.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success("Task successfully deleted", {
                style: {
                  background: '#ecfdf5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0'
                },
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#ecfdf5',
                },
              });
              setTasks(tasks.filter((task) => task._id !== id));
            }
          });
      }
    });
  };

  const filteredTasks = tasks
    .filter(task => 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(task => {
      if (filter === "active") {
        return new Date(task.deadline) > new Date();
      } else if (filter === "expired") {
        return new Date(task.deadline) <= new Date();
      }
      return true;
    });

  const getDaysRemaining = (deadline) => {
    const days = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
    if (days < 0) return { text: "Expired", class: "text-red-500" };
    if (days === 0) return { text: "Today", class: "text-amber-500" };
    if (days <= 3) return { text: `${days} days`, class: "text-amber-500" };
    return { text: `${days} days`, class: "text-green-500" };
  };

  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-emerald-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center">
            <div className="bg-emerald-100 p-3 rounded-xl mr-4 shadow-md flex items-center justify-center">
              <FaHandshake className="text-emerald-600 text-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-emerald-900">My Posted Tasks</h2>
              <p className="text-emerald-600">{filteredTasks.length} {filteredTasks.length === 1 ? "task" : "tasks"} found</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-emerald-400" />
              </div>
              <input
                type="text"
                placeholder="Search tasks..."
                className="pl-10 pr-4 py-2 w-full rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaFilter className="text-emerald-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 w-full rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent appearance-none bg-white"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Tasks</option>
                <option value="active">Active</option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>
        </div>

        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-emerald-100">
            <div className="mx-auto w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
              <GiProgression className="text-emerald-400 text-3xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No tasks found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {searchTerm || filter !== "all" 
                ? "Try adjusting your search or filter criteria"
                : "You haven't posted any tasks yet. Get started by creating a new task!"}
            </p>
            {!searchTerm && filter === "all" && (
              <Link 
                to="/create-task"
                className="mt-4 inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
              >
                Post a New Task
              </Link>
            )}
          </div>
        ) : (
          <>
            {/* Desktop View */}
            <div className="hidden md:block bg-white shadow-lg rounded-2xl overflow-hidden border border-emerald-50">
              <table className="w-full min-w-[700px]">
                <thead className="bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-900 text-sm uppercase">
                  <tr>
                    <th className="px-6 py-4 text-left rounded-tl-2xl">
                      <div className="flex items-center gap-2 font-semibold">
                        <MdTitle /> Task Details
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <div className="flex items-center gap-2 font-semibold">
                        <FaTags /> Category
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <div className="flex items-center gap-2 font-semibold">
                        <FaMoneyBillWave /> Budget
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <div className="flex items-center gap-2 font-semibold">
                        <FaCalendarAlt /> Deadline
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left rounded-tr-2xl">
                      <div className="flex items-center gap-2 font-semibold">
                        <FaHandshake /> Bids
                      </div>
                    </th>
                    <th className="px-6 py-4 text-right rounded-tr-2xl">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-50">
                  {filteredTasks.map((task) => {
                    const daysRemaining = getDaysRemaining(task.deadline);
                    
                    return (
                      <tr 
                        key={task._id} 
                        className={`hover:bg-emerald-50/50 transition ${new Date(task.deadline) <= new Date() ? 'bg-rose-50/30' : ''}`}
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-800">{task.title}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Posted: {new Date(task.createdAt).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 text-xs rounded-full ${task.category === 'Design' ? 'bg-indigo-100 text-indigo-800' : 
                                            task.category === 'Development' ? 'bg-blue-100 text-blue-800' :
                                            task.category === 'Writing' ? 'bg-amber-100 text-amber-800' :
                                            'bg-emerald-100 text-emerald-800'} font-semibold`}>
                            {task.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-emerald-700">${task.budget}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-700">
                            {new Date(task.deadline).toLocaleDateString()}
                          </div>
                          <div className={`text-xs font-medium ${daysRemaining.class}`}>
                            {daysRemaining.text}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            task.bidsCount > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {task.bidsCount || 0} {task.bidsCount === 1 ? 'bid' : 'bids'}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <Link
                            to={`/update-task/${task._id}`}
                            className="inline-flex items-center justify-center bg-emerald-100 hover:bg-emerald-200 text-emerald-800 w-9 h-9 rounded-lg transition-colors"
                            title="Edit Task"
                          >
                            <FaEdit className="text-sm" />
                          </Link>
                          <button
                            onClick={() => handleDelete(task._id)}
                            className="inline-flex items-center justify-center bg-rose-100 hover:bg-rose-200 text-rose-600 w-9 h-9 rounded-lg transition-colors"
                            title="Delete Task"
                          >
                            <FaTrash className="text-sm" />
                          </button>
                          <button
                            
                            className="inline-flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-600 w-9 h-9 rounded-lg transition-colors"
                            title="View Bids"
                          >
                            <FaHandshake className="text-sm" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
              {filteredTasks.map((task) => {
                const daysRemaining = getDaysRemaining(task.deadline);
                
                return (
                  <div
                    key={task._id}
                    className={`bg-white shadow-md rounded-xl p-4 border-l-4 ${
                      new Date(task.deadline) <= new Date() 
                        ? 'border-rose-300 bg-rose-50/20' 
                        : 'border-emerald-300'
                    } relative overflow-hidden`}
                  >
                    {new Date(task.deadline) <= new Date() && (
                      <div className="absolute top-2 right-2 bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">
                        Expired
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-emerald-900 truncate pr-4">{task.title}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        task.bidsCount > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {task.bidsCount || 0} {task.bidsCount === 1 ? 'bid' : 'bids'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.category === 'Design' ? 'bg-indigo-100 text-indigo-800' : 
                        task.category === 'Development' ? 'bg-blue-100 text-blue-800' :
                        task.category === 'Writing' ? 'bg-amber-100 text-amber-800' :
                        'bg-emerald-100 text-emerald-800'
                      } font-medium`}>
                        {task.category}
                      </span>
                      <span className="text-emerald-700 font-bold">${task.budget}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <div>
                        <span className="font-medium">Deadline: </span>
                        {new Date(task.deadline).toLocaleDateString()}
                      </div>
                      <span className={`font-medium ${daysRemaining.class}`}>
                        {daysRemaining.text}
                      </span>
                    </div>
                    
                    <div className="flex justify-end gap-2 pt-2 border-t border-emerald-100">
                      <Link
                        to={`/update-task/${task._id}`}
                        className="p-2 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="p-2 text-rose-600 hover:text-rose-800 hover:bg-rose-100 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                      <button
                        
                        className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-colors"
                        title="Bids"
                      >
                        <FaHandshake />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyTasks;