import React, { useState } from "react";
import TextFonted from "../../styles/TextFonted";
import { Pressable, View } from "react-native";
import { useSelector } from "react-redux";
import RoutesCard from "./RoutesCard";
const bs = require("../../styles/backgroundG");

export default function VehicleCard({ vehicle, routesOpen, setRoutesOpen }) {
  return (
    <React.Fragment>
      <Pressable style={bs.modalcontainer}>
        <View style={bs.cardstyle}>
          <View>
            <TextFonted>Tu vehiculo registrado es:</TextFonted>
            <TextFonted>{vehicle.type}</TextFonted>
            <TextFonted>{vehicle.brand}</TextFonted>
            <TextFonted>{vehicle.plate}</TextFonted>
          </View>
          <TextFonted>{`${vehicle.seats} pasajeros`}</TextFonted>
        </View>
      </Pressable>
    </React.Fragment>
  );
}
