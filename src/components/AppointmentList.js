import React, { useEffect, useState } from "react";
import { fetchAppointments } from "../services/api";

const AppointmentList = ({ onSelect }) => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchDate, setSearchDate] = useState("");
  const [searchDoctor, setSearchDoctor] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const data = await fetchAppointments();
        setAppointments(data);
        setFilteredAppointments(data);
      } catch (err) {
        setError("Failed to load appointments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadAppointments();
  }, []);

  // Filtering function
  useEffect(() => {
    let filtered = appointments;
    
    if (searchDate) {
      filtered = filtered.filter(appt => appt.date.includes(searchDate));
    }
    
    if (searchDoctor) {
      filtered = filtered.filter(appt => appt.doctorName.toLowerCase().includes(searchDoctor.toLowerCase()));
    }

    if (searchStatus) {
      filtered = filtered.filter(appt => appt.status.toLowerCase() === searchStatus.toLowerCase());
    }

    setFilteredAppointments(filtered);
  }, [searchDate, searchDoctor, searchStatus, appointments]);

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Appointments</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input 
          type="date" 
          value={searchDate} 
          onChange={(e) => setSearchDate(e.target.value)} 
          placeholder="Filter by date"
        />
        <input 
          type="text" 
          value={searchDoctor} 
          onChange={(e) => setSearchDoctor(e.target.value)} 
          placeholder="Filter by doctor name"
        />
        <select value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)}>
          <option value="">Filter by Status</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Completed">Completed</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>

      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.patientName}</td>
                <td>{appointment.doctorName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.location}</td>
                <td>{appointment.status}</td>
                <td>
                  <button onClick={() => onSelect(appointment.id)}>View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", color: "gray" }}>
                No matching appointments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
