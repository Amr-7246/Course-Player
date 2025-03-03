import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { players } from "@/app/Data/FakeData";

const LeaderBoardPopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-6 rounded-2xl shadow-xl w-[400px] relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Leaderboard 🏆
        </h2>

        <ul className="space-y-3">
          {players.map((player, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {player.rank}
                </div>
                <span className="text-gray-700 font-medium">{player.name}</span>
              </div>
              <span className="text-gray-900 font-semibold">{player.points} pts</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default LeaderBoardPopUp;
