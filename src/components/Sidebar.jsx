import { useState } from "react";
import {
  FaUser,
  FaBed,
  FaUsers,
  FaMoneyBill,
  FaUtensils,
  FaClipboardList,
  FaTools,
  FaUserShield,
  FaChartBar,
} from "react-icons/fa";
import HostelInfo from "./HostelInfo";
import StudentMang from "./StudentMang";
import Fees from "./Fees";
// import MessDetails from "./Mess";
import Attendance from "./Attendance";
import Maintenance from "./Maintenance";
import Visitors from "./Visitors";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import Topbar from "./Topbar";

const sections = [
  { id: "admin", title: "Dashboard", icon: <FaUser /> },
  { id: "hostel", title: "Hostel Info", icon: <FaBed /> },
  { id: "students", title: "Student Management", icon: <FaUsers /> },
  { id: "fees", title: "Fees & Payments", icon: <FaMoneyBill /> },
  { id: "mess", title: "Mess & Food", icon: <FaUtensils /> },
  { id: "attendance", title: "Attendance & Leaves", icon: <FaClipboardList /> },
  { id: "maintenance", title: "Maintenance & Complaints", icon: <FaTools /> },
  { id: "visitors", title: "Visitor Management", icon: <FaUserShield /> },
  { id: "reports", title: "Security Reports", icon: <FaChartBar /> },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("admin");

  const renderContent = () => {
    switch (activeSection) {
      case "admin":
        return <Dashboard />;
      case "hostel":
        return <HostelInfo />;
      case "students":
        return <StudentMang />;
      case "fees":
        return <Fees />;
      // case "mess":
      //   return <MessDetails />;
      case "attendance":
        return <Attendance />;
      case "maintenance":
        return <Maintenance />;
      case "visitors":
        return <Visitors />;
      case "reports":
        return <Reports />;
      default:
        return (
          <p className="text-gray-500 text-center text-lg font-medium">
            Click on a section to view details
          </p>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white shadow-lg h-screen flex flex-col">
        <div className="bg-yellow-500 text-gray-900 font-bold text-2xl py-4 px-5 text-center">
          🏨 Hostel Pro
        </div>

        <ul className="flex-1 overflow-y-auto p-5 space-y-3">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 text-lg font-medium tracking-wide ${
                activeSection === section.id
                  ? "bg-yellow-500 text-gray-900 shadow-md"
                  : "hover:bg-yellow-400 hover:text-gray-900"
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span className="truncate">{section.title}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white rounded-md shadow-md overflow-hidden relative">
        {/* Fixed Topbar */}
        <div className="fixed top-0 left-72 right-0 z-5 h-5 bg-white ">
          <Topbar />
        </div>

        {/* Content Area */}
        <div className="h-full w-full overflow-x-auto overflow-y-auto p-4 border border-gray-200 rounded-lg pt-16">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
