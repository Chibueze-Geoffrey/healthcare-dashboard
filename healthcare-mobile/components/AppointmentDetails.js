import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { fetchAppointmentDetails } from "../services/api";

const AppointmentDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const data = await fetchAppointmentDetails(id);
      setAppointment(data);
    };

    loadDetails();
  }, [id]);

  if (!appointment) return <Text>Loading details...</Text>;

  return (
    <View>
      <Text>Patient: {appointment.patientName}</Text>
      <Text>Doctor: {appointment.doctorName}</Text>
      <Text>Date: {appointment.date}</Text>
      <Text>Location: {appointment.location}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AppointmentDetails;
