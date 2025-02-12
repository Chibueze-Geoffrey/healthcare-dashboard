const API_BASE_URL = "http://192.168.159.214:5000/api"; // local IP

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
