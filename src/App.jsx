import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sign_Up from "./components/Sign_Up";
import Login from "./components/Login";
import FindDoctorSearch from "./components/FindDoctorSearch";
import Notification from "./components/Notification";

function App() {
  const [notification, setNotification] = useState({
    message: "",
    type: "", // success / error
    visible: false,
  });

  const showNotification = (msg, type = "success") => {
    setNotification({ message: msg, type, visible: true });

    // hide after 3 seconds
    setTimeout(() => {
      setNotification({ ...notification, visible: false });
    }, 3000);
  };

  return (
    <Router>
      <Navbar />

      {/* Notification available globally */}
      {notification.visible && (
        <Notification message={notification.message} type={notification.type} />
      )}

      <Routes>
        <Route path="/signup" element={<Sign_Up showNotification={showNotification} />} />
        <Route path="/login" element={<Login showNotification={showNotification} />} />
        <Route path="/appointments" element={<FindDoctorSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
