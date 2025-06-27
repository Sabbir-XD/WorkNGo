import { useContext, useEffect, useState } from "react";
import { FaTasks, FaUser, FaList } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalTasks: 0,
    myTasks: 0,
    users: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://assaignment-10-server-livid.vercel.app/dashboard-stats?email=" + user?.email
        );
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to load stats", error);
      }
    };
    if (user?.email) fetchStats();
  }, [user?.email]);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">
        Welcome, {user?.displayName || "User"}!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-4">
          <FaList className="text-blue-600 text-3xl" />
          <div>
            <p className="text-lg font-medium">Total Tasks</p>
            <p className="text-xl font-bold">{stats.totalTasks}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-4">
          <FaTasks className="text-green-600 text-3xl" />
          <div>
            <p className="text-lg font-medium">My Tasks</p>
            <p className="text-xl font-bold">{stats.myTasks}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-4">
          <FaUser className="text-purple-600 text-3xl" />
          <div>
            <p className="text-lg font-medium">Total Users</p>
            <p className="text-xl font-bold">{stats.users}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
