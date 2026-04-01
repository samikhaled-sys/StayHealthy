import React, { useState } from "react";

function DoctorCard({ doctor }) {
  const [appointment, setAppointment] = useState({
    booked: true,
    date: "2026-04-05",
    time: "10:00 AM",
  });

  const handleCancel = () => {
    // هنا ممكن تضيف API call للإلغاء
    setAppointment({ ...appointment, booked: false });
    alert(`Appointment with ${doctor.name} has been cancelled.`);
  };

  return (
    <div style={styles.card}>
      <h3>{doctor.name}</h3>
      <p>Specialty: {doctor.specialty}</p>
      {appointment.booked ? (
        <div>
          <p>
            Appointment: {appointment.date} at {appointment.time}
          </p>
          <button onClick={handleCancel}>Cancel Appointment</button>
        </div>
      ) : (
        <p>Appointment Cancelled</p>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    margin: "10px",
    boxShadow: "2px 2px 8px #aaa",
  },
};

export default DoctorCard;
