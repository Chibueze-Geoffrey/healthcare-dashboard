const API_BASE_URL = "http://localhost:5000/api"; 

// Fetch all appointments
export const fetchAppointments = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/appointments`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return [];
  }
};

// Fetch appointment details by ID
export const fetchAppointmentDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error(`Error fetching appointment details for ID ${id}:`, error);
    return null;
  }
};
