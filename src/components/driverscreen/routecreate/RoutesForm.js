import React, { useEffect, useState } from "react";
import { TextInput, View, Pressable, Button } from "react-native";
import { useDispatch } from "react-redux";
import TextFonted from "../../../styles/TextFonted";
const bs = require("../../../styles/backgroundG");
const is = require("../../../styles/InputStyles");
const us = require("../../../styles/ButtonStyles");
const ts = require("../../../styles/TextStyles");
import { Picker } from "@react-native-picker/picker";

export default function RoutesForm() {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const [occupiedseats, setOccupiedseats] = useState("");

  const routeData = {
    type: type,
    name: name,
    origin: origin,
    destination: destination,
    time: time,
    occupiedseats: occupiedseats,
  };

  return (
    <React.Fragment>
      <View style={bs.modalcontainer}>
        <View style={bs.modalstyle}>
          <Button
            title="Cerrar"
            onPress={() => setRoutesOpen(!setRoutesOpen)}
          />
          <TextFonted styles={ts.default}>
            Agrega un ruta para comenzar a ahorrar.
          </TextFonted>
          <TextFonted styles={ts.default}>
            Elige si tu ruta es una rutina o un viaje
          </TextFonted>
          <Picker
            style={{ width: "60%" }}
            dropdownIconColor="white"
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
          >
            <Picker.Item
              style={{ fontSize: 20 }}
              label="Rutina"
              value="routine"
            />
            <Picker.Item style={{ fontSize: 20 }} label="Viaje" value="trip" />
          </Picker>
          <TextFonted styles={ts.default}>Nombra tu ruta</TextFonted>
          <TextInput
            style={is.default}
            value={name}
            onChangeText={(newText) => setName(newText)}
          />
          <Pressable style={us.getinto} onPress={handleSubmit}>
            <TextFonted styles={us.text}>
              SELECCIONA RUTA LA EN EL MAPA
            </TextFonted>
          </Pressable>
          {/* DATE PICKER*/}
          <TextFonted styles={ts.default}>Elige la hora de partida</TextFonted>
          <TextInput
            style={is.default}
            value={time}
            onChangeText={(newText) => setTime(newText)}
          />
          <TextFonted styles={ts.default}>
            Elige la cantidad de asientos disponibles{" "}
          </TextFonted>
          <TextInput
            style={is.default}
            value={occupiedseats}
            onChangeText={(newText) => setPlate(newText)}
            keyboardtype="numeric"
          />
          <Pressable style={us.getinto} onPress={handleSubmit}>
            <TextFonted styles={us.text}>CREAR</TextFonted>
          </Pressable>
        </View>
      </View>
    </React.Fragment>
  );
}
