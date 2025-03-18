import { useState } from "react";

export default function AdminProfile() {
  const [adminData, setAdminData] = useState({
    name: "John Doe",
    email: "admin@example.com",
    contact: "+91 98765 43210",
    role: "Super Admin",
    profilePicture: "https://via.placeholder.com/150",
    password: "********",
  });

  const handleInputChange = (field, value) => {
    setAdminData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        🛠️ Admin Profile
      </h2>
      
      <div className="flex flex-col items-center mb-5">
        <img
          src={adminData.profilePicture}
          alt="Admin Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.keys(adminData).map((key) => (
          <div key={key}>
            <label className="block text-gray-700 font-medium capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type={key === "password" ? "password" : "text"}
              value={adminData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      <button className="w-full mt-5 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all">
        Save Changes
      </button>
    </div>
  );
}
