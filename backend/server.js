const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Data
const appointments = [
  { id: 1, patientName: "John Doe", doctorName: "Dr. Smith", specialty: "Cardiology", date: "2025-02-12", time: "10:00 AM", location: "Clinic A", status: "Upcoming" },
  { id: 2, patientName: "Jane Roe", doctorName: "Dr. Johnson", specialty: "Dermatology", date: "2025-02-15", time: "2:00 PM", location: "Clinic B", status: "Completed" },
  { id: 3, patientName: "Alice Brown", doctorName: "Dr. Miller", specialty: "Orthopedics", date: "2025-02-18", time: "4:30 PM", location: "Clinic C", status: "Upcoming" },
  { id: 4, patientName: "Bob White", doctorName: "Dr. Clark", specialty: "Neurology", date: "2025-02-20", time: "1:00 PM", location: "Clinic A", status: "Canceled" },
  { id: 5, patientName: "Emma Green", doctorName: "Dr. Carter", specialty: "Pediatrics", date: "2025-02-25", time: "3:15 PM", location: "Clinic B", status: "Upcoming" }
];

// Routes
app.get("/api/appointments", (req, res) => {
  res.json(appointments);
});

app.get("/api/appointments/:id", (req, res) => {
  const appointment = appointments.find(appt => appt.id == req.params.id);
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }
  res.json(appointment);
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
