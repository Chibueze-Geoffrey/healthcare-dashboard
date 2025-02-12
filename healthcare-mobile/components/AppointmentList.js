import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native";
import { fetchAppointments } from "../services/api";

const AppointmentList = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchDate, setSearchDate] = useState("");
  const [searchDoctor, setSearchDoctor] = useState("");

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointments();
      setAppointments(data);
      setFilteredAppointments(data);
      setLoading(false);
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

    setFilteredAppointments(filtered);
  }, [searchDate, searchDoctor, appointments]);

  if (loading) return <Text>Loading appointments...</Text>;

  return (
    <View>
      <Text>Appointments</Text>
      <TextInput 
        placeholder="Filter by date (YYYY-MM-DD)"
        value={searchDate}
        onChangeText={setSearchDate}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput 
        placeholder="Filter by doctor name"
        value={searchDoctor}
        onChangeText={setSearchDoctor}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <FlatList
        data={filteredAppointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details", { id: item.id })}>
            <Text>{item.patientName} - {item.doctorName} ({item.date})</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AppointmentList;
