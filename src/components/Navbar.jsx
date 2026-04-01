import React from "react";

function Navbar() {
  const handleLogout = () => {
    // Remove token
    localStorage.removeItem("token");

    // Optional: redirect
    window.location.href = "/login";
  };

  return (
    <nav style={styles.nav}>
      <h3>StayHealthy</h3>

      <div>
        <a href="/appointments">Appointments</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>

        {/* Logout Button */}
        <button onClick={handleLogout} style={styles.btn}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
  },
  btn: {
    marginLeft: "10px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;
