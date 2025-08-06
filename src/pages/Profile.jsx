import { useParams } from "react-router-dom";
import doctors from "../data/doctors.json";
import AppointmentForm from "../components/AppointmentForm";
import styles from "../styles/Profile.module.css";

export default function Profile() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className={styles.profile}>
      <img src={doctor.image} alt={doctor.name} className={styles.image} />
      <h2>{doctor.name}</h2>
      <p>
        <strong>Specialization:</strong> {doctor.specialization}
      </p>
      <p>
        <strong>Bio:</strong> {doctor.bio}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span
          className={doctor.available ? styles.available : styles.unavailable}
        >
          {doctor.available ? "Available" : "Unavailable"}
        </span>
      </p>
      <AppointmentForm doctor={doctor} />
    </div>
  );
}
