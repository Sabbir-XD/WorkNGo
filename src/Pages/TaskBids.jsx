import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaUserCircle, FaMoneyBillWave, FaListOl } from "react-icons/fa";

const TaskBids = () => {
  const { taskId } = useParams();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await fetch(`https://your-server-url.com/tasks/${taskId}/bidders`);
        const data = await response.json();
        setBids(data);
      } catch (error) {
        console.error("Failed to load bidders:", error);
      }
    };

    if (taskId) fetchBids();
  }, [taskId]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-2xl mt-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
        <FaMoneyBillWave className="mr-2" />
        Bidders for Task ID: <span className="ml-1 text-gray-600">{taskId}</span>
      </h2>

      {bids.length === 0 ? (
        <p className="text-gray-500 flex items-center">
          <FaUserCircle className="mr-2" /> No one has placed a bid yet.
        </p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-100 text-green-800">
                <tr>
                  <th className="text-left px-4 py-3">
                    <div className="flex items-center">
                      <FaListOl className="mr-2" /> #
                    </div>
                  </th>
                  <th className="text-left px-4 py-3">Bidder Title</th>
                  <th className="text-left px-4 py-3">Total Bids</th>
                </tr>
              </thead>
              <tbody>
                {bids.map((bid, index) => (
                  <tr
                    key={bid._id}
                    className="border-t border-gray-200 hover:bg-green-50 transition"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-medium text-gray-700">{bid.userEmail}</td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm">
                        {bid.bidsCount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {bids.map((bid, index) => (
              <div
                key={bid._id}
                className="border border-gray-200 rounded-lg p-3 hover:bg-green-50 transition"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                      {index + 1}
                    </span>
                    <span className="font-medium text-gray-800 truncate max-w-[160px]">
                      {bid.userEmail}
                    </span>
                  </div>
                  <span className="bg-green-100 text-green-800 py-1 px-2 rounded-full text-xs">
                    {bid.bidsCount} bids
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskBids;
