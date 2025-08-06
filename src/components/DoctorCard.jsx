import { Link } from "react-router-dom";
import styles from "../styles/DoctorCard.module.css";

export default function DoctorCard({ doctor }) {
  return (
    <Link to={`/doctor/${doctor.id}`} className={styles.card}>
      <img src={doctor.image} alt={doctor.name} className={styles.image} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p className={doctor.available ? styles.available : styles.unavailable}>
        {doctor.available ? "Available" : "Unavailable"}
      </p>
    </Link>
  );
}
