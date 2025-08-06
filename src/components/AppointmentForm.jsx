import React, { useState } from "react";
import styles from "../styles/AppointmentForm.module.css";

export default function AppointmentForm({ doctorName }) {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    datetime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      {submitted ? (
        <div className={styles.success}>
          <h3>Appointment Confirmed!</h3>
          <p>
            You have booked an appointment with <strong>{doctorName}</strong>.
          </p>
          <p>
            We will contact you at <strong>{formData.email}</strong>.
          </p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>
            Book Appointment with <span>{doctorName}</span>
          </h2>

          <input
            type="text"
            id="patientName"
            name="patientName"
            placeholder="Enter your full name"
            required
            value={formData.patientName}
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={formData.datetime}
            placeholder="YYYY-MM-DD HH:MM"
            onChange={handleChange}
          />
          <small className={styles.hint}>Format: YYYY-MM-DD HH:MM (24hr)</small>

          <button type="submit">Confirm Appointment</button>
        </form>
      )}
    </div>
  );
}
