import React, { useState } from "react";
import AppointmentList from "./components/AppointmentList";
import AppointmentDetails from "./components/AppointmentDetails";

const App = () => {
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  return (
    <div>
      {selectedAppointmentId ? (
        <AppointmentDetails id={selectedAppointmentId} onBack={() => setSelectedAppointmentId(null)} />
      ) : (
        <AppointmentList onSelect={setSelectedAppointmentId} />
      )}
    </div>
  );
};

export default App;
