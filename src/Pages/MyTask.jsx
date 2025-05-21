import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaEdit,
  FaTrash,
  FaHandshake,
  FaCalendarAlt,
  FaTags,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdTitle } from "react-icons/md";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router";
import toast from "react-hot-toast";

const MyTasks = () => {
  const { user, setLoading } = useContext(AuthContext);
  const initialData = useLoaderData();
  const [tasks, setTasks] = useState(initialData);
  const [bidUser, setBidUser] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/tasks/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
        });
    }
  }, [user?.email]);

  useEffect(() => {
    fetch("http://localhost:5000/bids")
      .then((res) => res.json())
      .then((data) => setBidUser(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              setTasks(tasks.filter((task) => task._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-800 flex items-center justify-center md:justify-start">
          <span className="bg-green-100 p-3 rounded-xl mr-4 shadow-md">
            <FaHandshake className="text-green-600 text-xl" />
          </span>
          My Posted Tasks
        </h2>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-green-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-green-100/60 text-green-800 text-sm uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <MdTitle /> Title
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <FaTags /> Category
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave /> Budget
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt /> Deadline
                    </div>
                  </th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-100">
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <tr key={task._id} className="hover:bg-green-50 transition">
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {task.title}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-200 text-green-800 font-semibold">
                          {task.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-green-600 font-bold">
                        ${task.budget}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">
                          {new Date(task.deadline).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-400">
                          {Math.ceil(
                            (new Date(task.deadline) - new Date()) /
                              (1000 * 60 * 60 * 24)
                          )}{" "}
                          days left
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-4">
                          <Link
                            to={`/update-task/${task._id}`}
                            className="px-4 py-2 rounded-xl bg-green-100 hover:bg-green-200 text-green-700 text-sm font-medium transition"
                            title="Update Task"
                          >
                            <FaEdit size={18} />
                          </Link>
                          <button
                            onClick={() => handleDelete(task._id)}
                            className="px-4 py-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 text-sm font-medium transition"
                            title="Delete Task"
                          >
                            <FaTrash size={18} />
                          </button>
                          <Link
                            to={`/bids/${task._id}`}
                            className="px-4 py-2 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-600 text-sm font-medium transition"
                            title="View Bids"
                          >
                            <FaHandshake size={18} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                      No tasks found. Create your first task!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
