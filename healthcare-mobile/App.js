import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppointmentList from "./components/AppointmentList";
import AppointmentDetails from "./components/AppointmentDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Appointments" component={AppointmentList} />
        <Stack.Screen name="Details" component={AppointmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
