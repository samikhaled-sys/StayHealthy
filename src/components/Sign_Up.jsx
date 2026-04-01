import React, { useState } from "react";

function Sign_Up() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Success:", data);
      alert("Registered Successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Registration Failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      
      <select name="role" onChange={handleChange}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Sign_Up;
