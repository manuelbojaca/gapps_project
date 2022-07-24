import React, { useState } from "react";
import { View, Pressable, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import VehicleCreate from "../components/driverscreen/VehicleCreate";
import DriverHeader from "../components/driverscreen/DriverHeader";
import VehicleCard from "../components/driverscreen/VehicleCard";
const bs = require("../styles/backgroundG");
const us = require("../styles/ButtonStyles");
import theme from "../styles/Theme";
import TextFonted from "../styles/TextFonted";

function Driver({ navigation }) {
  const { user } = useSelector((state) => state.users);
  console.log("UserDriver:", user.vehicles);
  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);

  const vehicle = {
    type: "Automovil",
    brand: "Mazda",
    color: "Rojo",
    plate: "FAM171",
    seats: 4,
  };

  return (
    <View style={bs.driverback}>
      <VehicleCreate
        vehicleOpen={vehicleOpen}
        setVehicleOpen={setVehicleOpen}
      />
      <DriverHeader style={styles.header} />
      <ScrollView style={styles.content}>
        <TextFonted></TextFonted>
        {user.vehicle === undefined ? (
          <VehicleCard vehicle={vehicle} />
        ) : (
          <Pressable
            style={us.radioBtn}
            onPress={() => setVehicleOpen(!vehicleOpen)}
          >
            <TextFonted styles={us.textRadioBtn}>Agrega un vehiculo</TextFonted>
          </Pressable>
        )}
        <Pressable
          style={us.radioBtn}
          onPress={() => setRoutesOpen(!routesOpen)}
        >
          <TextFonted styles={us.textRadioBtn}>Agrega una ruta</TextFonted>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = {
  header: {
    flex: 2,
  },
  content: {
    flex: 6,
    backgroundColor: theme.colors.title,
  },
};

export default Driver;
