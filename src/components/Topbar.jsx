import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-5 mb-5 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-all">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, Admin
        </h1>
        <p className="text-gray-600">Here's the latest hostel update.</p>
      </div>
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        onClick={() => setShowAdminDetails(true)}
      >
        Dashboard
      </button>
    </div>
  );
};

export default Topbar;
