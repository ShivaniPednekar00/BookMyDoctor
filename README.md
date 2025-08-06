
# BookMyDoctor

A simple healthcare appointment booking app built with React.js.

## 🔧 Tools & Libraries Used
- React.js (Vite)
- React Router DOM
- CSS Modules
- Git & GitHub

## ✨ Features
- Search doctors by name or specialization
- View doctor availability
- Book appointment with available doctors
- Stylish and responsive UI

## 🚀 Improvements with More Time
- Add backend for storing appointments
- Login & Signup for patients
- Filter by availability or location
- Integrate real-time doctor availability API

## 🧠 Challenges Faced & Solutions
- **Dynamic routing** to doctor profile — Solved using `react-router-dom`.
- **Conditional rendering** of appointment form — Resolved by passing doctor data via route.
- **Design consistency** — Used CSS Modules for scoped and clean styling.


## 📂 Folder Structure

BookMyDoctor/
├── public/
├── src/
│ ├── components/
│ │ └── AppointmentForm.jsx
│ ├── data/
│ │ └── doctors.json
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── Profile.jsx
│ ├── styles/
│ │ ├── AppointmentForm.module.css
│ │ ├── Home.module.css
│ │ └── Profile.module.css
│ ├── App.jsx
│ └── main.jsx
├── package.json
├── vite.config.js
└── README.md
