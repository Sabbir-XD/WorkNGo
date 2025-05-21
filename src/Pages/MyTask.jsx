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
import { useLoaderData } from "react-router";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const initialData = useLoaderData();
  const [tasks, setTasks] = useState(initialData);

  console.log(tasks);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/tasks/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  //delete a use
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
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Task has been deleted.",
                icon: "success",
              });
              const remaining = tasks.filter((task) => task._id !== id);
              setTasks(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-8 text-green-800 flex items-center justify-center md:justify-start">
          <span className="bg-green-100 p-3 rounded-xl mr-4 shadow-md">
            <FaHandshake className="text-green-600 text-xl" />
          </span>
          My Posted Tasks
        </h2>

        {/* Table */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-green-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-green-100/60 text-green-800 text-sm uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <MdTitle />
                      Title
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <FaTags />
                      Category
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave />
                      Budget
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      Deadline
                    </div>
                  </th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-100">
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <tr key={task._id} className="hover:bg-green-50 transition">
                      <td className="px-6 py-4">
                        <p className="text-gray-800 font-medium">
                          {task.title}
                        </p>
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
                        <div className="flex justify-end gap-2">
                          <button className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-700 transition">
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(task._id)}
                            className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition"
                          >
                            <FaTrash />
                          </button>
                          <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition">
                            <FaHandshake />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-10 text-center text-gray-500"
                    >
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
