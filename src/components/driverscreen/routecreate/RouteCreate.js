import React, { useEffect, useState } from "react";
import { TextInput, View, Pressable, Modal, Button } from "react-native";
import { useDispatch } from "react-redux";
import TextFonted from "../../../styles/TextFonted";
const bs = require("../../../styles/backgroundG");
const is = require("../../../styles/InputStyles");
const us = require("../../../styles/ButtonStyles");
const ts = require("../../../styles/TextStyles");
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCreateRouteMutation } from "../../../store/services/routeAPI";
import { Picker } from "@react-native-picker/picker";

export default function RouteCreate({ routesOpen, setRoutesOpen }) {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const [occupiedseats, setOccupiedseats] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const routeData = {
    type: type,
    name: name,
    origin: origin,
    destination: destination,
    time: time,
    occupiedseats: occupiedseats,
    date,
  };

  const [trigger, { data, error, isLoading }] = useCreateRouteMutation();

  async function getValueFor(key) {
    let result = await AsyncStorage.getItem(key);
    return result;
  }

  useEffect(() => {
    console.log("Data: ", data, error, isLoading);
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getValueFor("token");
    setTimeout(() => {
      console.log("wait:", token);
      trigger({ body: routeData, token: token }).catch((err) =>
        console.log(err)
      );
    }, 5000);
    setRoutesOpen(!setRoutesOpen);
    console.log("pasa");
  };

  return (
    <React.Fragment>
      <Modal animationType="slide" transparent={true} visible={routesOpen}>
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
              <Picker.Item
                style={{ fontSize: 20 }}
                label="Viaje"
                value="trip"
              />
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
            {type === "trip" ? (
              <DatePicker
                modal
                mode="datetime"
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            ) : (
              <DatePicker
                modal
                mode="time"
                open={open}
                date={time}
                onConfirm={(date) => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            )}
            <TextFonted styles={ts.default}>
              Elige la hora de partida
            </TextFonted>
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
      </Modal>
    </React.Fragment>
  );
}
