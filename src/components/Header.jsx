// src/components/Header.jsx
import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
          alt="Doctor Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>BookMyDoctor</h1>
      </div>
    </header>
  );
}
