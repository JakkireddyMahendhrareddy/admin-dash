import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/pages/Sidebar";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Dashboard from "./components/masters/Dashboard";
import "./App.css";

const Layout = () => (
  <div className="h-screen w-screen flex flex-col">
    <div className="flex flex-row flex-1 overflow-hidden">
      <Sidebar/>
    </div>
  </div>
);

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <div className="relative h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <div className="h-screen flex flex-col items-center justify-center">
                  <Profile />
                </div>
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
