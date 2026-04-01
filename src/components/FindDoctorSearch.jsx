import React, { useState } from "react";

function FindDoctorSearch() {
  const [search, setSearch] = useState("");

  const doctors = [
    { id: 1, name: "Dr. Ahmad", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Sara", specialty: "Dermatologist" },
    { id: 3, name: "Dr. Ali", specialty: "Dentist" },
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3>Find a Doctor</h3>

      <input
        type="text"
        placeholder="Search doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredDoctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FindDoctorSearch;
