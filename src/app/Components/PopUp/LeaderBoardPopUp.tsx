import React from "react";

const LeaderBoardPopUp: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-gray-100 rounded-md">Player 1 - 1000 pts</li>
          <li className="p-2 bg-gray-100 rounded-md">Player 2 - 900 pts</li>
          <li className="p-2 bg-gray-100 rounded-md">Player 3 - 850 pts</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
      </div>
    </div>
  );
};

export default LeaderBoardPopUp;
