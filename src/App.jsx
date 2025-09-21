import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Calendar from "./pages/Calendar";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import "./App.css";

// Page animation variants
const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: "/", element: <Dashboard /> },
          { path: "/analytics", element: <Analytics /> },
          { path: "/tasks", element: <Tasks /> },
          { path: "/reports", element: <Reports /> },
          { path: "/users", element: <Users /> },
          { path: "/settings", element: <Settings /> },
          { path: "/notifications", element: <Notifications /> },
          { path: "/messages", element: <Messages /> },
          { path: "/calendar", element: <Calendar /> },
          { path: "/billing", element: <Billing /> },
          { path: "/profile", element: <Profile /> },
        ].map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                {element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <div className="main-content-wrapper">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;




