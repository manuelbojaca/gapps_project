import React, { useState } from "react";
import TextFonted from "../../styles/TextFonted";
import { Pressable, View } from "react-native";
import { useSelector } from "react-redux";

export default function VehicleCard({ vehicle, routesOpen, setRoutesOpen }) {
  const [brand, setBrand] = useState(vehicle.brand);
  const [plate, setPlate] = useState(vehicle.plate);
  const [seats, setSeats] = useState(vehicle.seats);

  return (
    <React.Fragment>
      <RoutesCard />
      <Pressable>
        <View>
          <TextFonted>{brand}</TextFonted>
          <TextFonted>{plate}</TextFonted>
        </View>
        <TextFonted>{seats}</TextFonted>
      </Pressable>
    </React.Fragment>
  );
}
