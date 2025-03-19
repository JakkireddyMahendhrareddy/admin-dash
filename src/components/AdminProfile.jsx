// import { FaUser, FaBed, FaUsers, FaTools } from "react-icons/fa";

// export default function AdminProfile() {
//   const stats = [
//     {
//       title: "Total Fees Collected",
//       value: "₹2,50,000",
//       change: "+5.2%",
//       icon: "💰",
//     },
//     {
//       title: "Total Students",
//       value: "145",
//       change: "+12.5%",
//       icon: <FaUsers />,
//     },
//     {
//       title: "Active Staff",
//       value: "8",
//       icon: "👨‍🏫",
//     },
//     {
//       title: "Pending Complaints",
//       value: "5",
//       change: "-14.5%",
//       icon: <FaTools />,
//     },
//   ];

//   const hostelStatus = [
//     {
//       title: "Rooms Available",
//       current: 40,
//       capacity: 100,
//       percentage: 40,
//       icon: <FaBed />,
//     },
//     {
//       title: "Occupied Rooms",
//       current: 60,
//       capacity: 100,
//       percentage: 60,
//       icon: <FaBed />,
//     },
//   ];

//   const recentActivity = [
//     { name: "John Doe", type: "Checked-in", time: "10:30 AM" },
//     { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
//   ];

//   return (
//     <div className="p-2 min-h-screen">
//       <h1 className="text-3xl font-bold">Welcome back, Admin</h1>
//       <p className="text-gray-600">Here's the latest hostel update.</p>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="p-5 bg-white shadow-md rounded-lg flex flex-col gap-2 h-40 w-45"
//           >
//             <div className="flex justify-between items-center space-x-1">
//               <h2 className="text-lg font-semibold">{stat.title}</h2>
//               <span className="text-2xl">{stat.icon}</span>
//             </div>
//             <div className="text-3xl font-bold">{stat.value}</div>
//             {stat.change && (
//               <span className="text-green-500">{stat.change}</span>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Hostel Status */}
//       <h2 className="mt-8 text-xl font-semibold">Hostel Room Status</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//         {hostelStatus.map((status, index) => (
//           <div key={index} className="bg-white p-5 rounded-lg shadow-md">
//             <div className="flex items-center gap-3">
//               <span className="text-3xl text-blue-600">{status.icon}</span>
//               <h3 className="text-lg font-semibold">{status.title}</h3>
//             </div>
//             <p className="text-gray-600 mt-1">
//               {status.current} of {status.capacity}
//             </p>
//             <div className="relative mt-3">
//               <div className="h-2 bg-gray-200 rounded-full">
//                 <div
//                   className="h-2 bg-blue-600 rounded-full"
//                   style={{ width: `${status.percentage}%` }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Recent Activity */}
//       <h2 className="mt-8 text-xl font-semibold">Recent Activity</h2>
//       <div className="bg-white p-5 rounded-lg shadow-md mt-4">
//         {recentActivity.map((activity, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row justify-between py-2 border-b text-center sm:text-left"
//           >
//             <span className="font-medium">{activity.name}</span>
//             <span className="text-gray-500">{activity.type}</span>
//             <span className="text-gray-500">{activity.time}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FaUser, FaBed, FaUsers, FaTools } from "react-icons/fa";

export default function AdminProfile() {
  const [showAdminDetails, setShowAdminDetails] = useState(false);

  const stats = [
    {
      title: "Total Fees Collected",
      value: "₹2,50,000",
      change: "+5.2%",
      icon: "💰",
    },
    {
      title: "Total Students",
      value: "145",
      change: "+12.5%",
      icon: <FaUsers />,
    },
    { title: "Active Staff", value: "8", icon: "👨‍🏫" },
    {
      title: "Pending Complaints",
      value: "5",
      change: "-14.5%",
      icon: <FaTools />,
    },
  ];

  const hostelStatus = [
    {
      title: "Rooms Available",
      current: 40,
      capacity: 100,
      percentage: 40,
      icon: <FaBed />,
    },
    {
      title: "Occupied Rooms",
      current: 60,
      capacity: 100,
      percentage: 60,
      icon: <FaBed />,
    },
  ];

  const recentActivity = [
    { name: "John Doe", type: "Checked-in", time: "10:30 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
    { name: "AC Repair", type: "Maintenance Request", time: "9:15 AM" },
  ];

  return (
    <div className="p-2 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Admin</h1>
          <p className="text-gray-600">Here's the latest hostel update.</p>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setShowAdminDetails(true)}
        >
          Admin Details
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-5 bg-white shadow-md rounded-lg flex flex-col gap-2 h-40"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{stat.title}</h2>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className="text-3xl font-bold">{stat.value}</div>
            {stat.change && (
              <span className="text-green-500">{stat.change}</span>
            )}
          </div>
        ))}
      </div>

      {/* Hostel Status */}
      <h2 className="mt-8 text-xl font-semibold">Hostel Room Status</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {hostelStatus.map((status, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-blue-600">{status.icon}</span>
              <h3 className="text-lg font-semibold">{status.title}</h3>
            </div>
            <p className="text-gray-600 mt-1">
              {status.current} of {status.capacity}
            </p>
            <div className="relative mt-3">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: `${status.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="mt-8 text-xl font-semibold">Recent Activity</h2>
      <div className="bg-white p-5 rounded-lg shadow-md mt-4 max-h-40 overflow-y-auto">
        {recentActivity.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between py-2 border-b text-center sm:text-left"
          >
            <span className="font-medium">{activity.name}</span>
            <span className="text-gray-500">{activity.type}</span>
            <span className="text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>

      {/* Admin Details Modal */}
      {showAdminDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-bold mb-2">Admin Details</h2>
            <p>
              <strong>Name:</strong> John Admin
            </p>
            <p>
              <strong>Email:</strong> admin@example.com
            </p>
            <p>
              <strong>Role:</strong> Super Admin
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setShowAdminDetails(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
