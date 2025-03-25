import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="h-16 flex justify-end bg-transparent items-center p-5 mb-5 rounded-lg shadow-md">
        <button
          className="text-gray-700 text-2xl rounded hover:scale-140 transition-400 duration-150 mx-6"
          onClick={() => setShowAdminDetails(true)}
        >
          <FaBell />
        </button>
        <button
          className="text-gray-700 text-2xl rounded-lg hover:scale-140 transition-400 duration-150 mx-2"
          onClick={() => setShowAdminDetails(true)}
        >
          <FaUserCircle />
        </button>
    </div>
  );
};

export default Topbar;
