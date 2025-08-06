// src/pages/Home.jsx
import React, { useState } from "react";
import doctors from "../data/doctors.json";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");

  // Filter doctors by name or specialization
  const filteredDoctors = doctors.filter((doctor) =>
    (doctor.name + doctor.specialization)
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find a Doctor</h1>

      {/* 🔍 Search input */}
      <input
        type="text"
        placeholder="Search by name or specialization"
        className={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.grid}>
        {filteredDoctors.length === 0 ? (
          <p>No matching doctors found.</p>
        ) : (
          filteredDoctors.map((doctor) => (
            <Link
              to={`/doctor/${doctor.id}`}
              key={doctor.id}
              className={styles.card}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className={styles.image}
              />
              <div>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialization}</p>
                <p>
                  Status:{" "}
                  <span style={{ color: doctor.available ? "green" : "red" }}>
                    {doctor.available ? "Available" : "Unavailable"}
                  </span>
                </p>
                <button
                  className={styles.button}
                  onClick={handleToggleForm}
                  disabled={!doctor.available}
                >
                  Book Appointment
                </button>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
