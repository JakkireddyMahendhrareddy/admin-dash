import Sidebar from "./components/Sidebar";
import "./App.css";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden flex">
      <div className="left-0 top-0 fixed">
        <Sidebar />
      </div>
      <div className="top fixed right-0 left-72">
        <Topbar />
      </div>
    </div>
  );
}

export default App;

// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
// import "./App.css";

// function App() {
//   return (
//     <div className="h-screen w-screen flex flex-col">
//       {/* Topbar at the top, full width */}
//       <div className="w-full">
//         <Topbar />
//       </div>

//       {/* Sidebar and Content side by side */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar (Fixed Left) */}
//         <div className="w-72 bg-gray-900 text-white">
//           <Sidebar />
//         </div>

//         {/* Main Content (Right, takes remaining space) */}
//         <div className="flex-1 overflow-auto p-4 bg-gray-100">
//           {/* Render your main content here */}
//           <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
