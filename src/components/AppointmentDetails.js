import React, { useEffect, useState } from "react";
import { fetchAppointmentDetails } from "../services/api";

const AppointmentDetails = ({ id, onBack }) => {
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const data = await fetchAppointmentDetails(id);
        if (!data) throw new Error("Appointment not found.");
        setAppointment(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [id]);

  if (loading) return <p>Loading details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>Appointment Details</h2>
      <p><strong>Patient:</strong> {appointment.patientName}</p>
      <p><strong>Doctor:</strong> {appointment.doctorName} ({appointment.specialty})</p>
      <p><strong>Date:</strong> {appointment.date}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
      <p><strong>Location:</strong> {appointment.location}</p>
      <p><strong>Status:</strong> <span style={{ color: appointment.status === "Upcoming" ? "green" : appointment.status === "Completed" ? "blue" : "red" }}>{appointment.status}</span></p>
      <button onClick={onBack} style={{ marginTop: "10px", padding: "8px 15px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Back
      </button>
    </div>
  );
};

export default AppointmentDetails;
