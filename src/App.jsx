import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-row flex-1 mt-0 overflow-hidden">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
