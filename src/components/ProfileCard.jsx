import React, { useState } from "react";

function ProfileCard() {
  const [user, setUser] = useState({
    name: "Sami Tadros",
    email: "sami@example.com",
    phone: "123-456-7890",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated User:", user);
  };

  return (
    <div style={styles.card}>
      <h3>Profile</h3>

      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    boxShadow: "2px 2px 12px #aaa",
  },
};

export default ProfileCard;
