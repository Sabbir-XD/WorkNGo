import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaUserCircle, FaMoneyBillWave, FaListOl, FaTable } from "react-icons/fa";

const TaskBids = () => {
  const { taskId } = useParams();
  const [bids, setBids] = useState([]);

  console.log(bids)

  useEffect(() => {
    fetch("http://localhost:5000/bids")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((bid) => bid.taskId === taskId);
        setBids(filtered);
      });
  }, [taskId]);

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-4 md:p-6 bg-white shadow-lg rounded-2xl mt-4 sm:mt-6 mb-5">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-800 flex items-center">
        <FaMoneyBillWave className="mr-2" />
        Bidders for Task ID: <span className="text-gray-600 ml-1">{taskId}</span>
      </h2>

      {bids.length === 0 ? (
        <p className="text-gray-500 flex items-center">
          <FaUserCircle className="mr-2" /> No bids yet
        </p>
      ) : (
        <>
          {/* Desktop Table (visible on md screens and above) */}
          <div className="hidden md:block">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-100 text-green-800">
                <tr>
                  <th className="text-left px-4 py-3">
                    <div className="flex items-center">
                      <FaListOl className="mr-2" /> #
                    </div>
                  </th>
                  <th className="text-left px-4 py-3">Bidder</th>
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
                    <td className="px-4 py-3 font-medium">
                      <div className="flex items-center">
                        {bid.photo ? (
                          <img
                            src={bid.photo}
                            alt={bid.userEmail}
                            className="w-10 h-10 border-1 border-green-500 p-0.5 rounded-full mr-3 object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                            <FaUserCircle className="text-green-600" />
                          </div>
                        )}
                        <span>{bid.userEmail}</span>
                      </div>
                    </td>
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

          {/* Mobile Cards (visible on screens smaller than md) */}
          <div className="md:hidden space-y-3">
            {bids.map((bid, index) => (
              <div
                key={bid._id}
                className="border border-gray-200 rounded-lg p-3 hover:bg-green-50 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                      {index + 1}
                    </span>
                    <div className="flex items-center">
                      {bid.photo ? (
                        <img
                          src={bid.photo}
                          alt={bid.userEmail}
                          className="w-8 h-8 rounded-full mr-2 object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center mr-2">
                          <FaUserCircle className="text-green-600" />
                        </div>
                      )}
                      <span className="font-medium text-sm sm:text-base truncate max-w-[120px] sm:max-w-none">
                        {bid.userEmail}
                      </span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 py-1 px-2 rounded-full text-xs sm:text-sm">
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