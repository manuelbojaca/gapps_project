import React, { useEffect, useState } from "react";
import { TextInput, View, Pressable, Modal, Button } from "react-native";
import { useDispatch } from "react-redux";
import TextFonted from "../../styles/TextFonted";
const bs = require("../../styles/backgroundG");
const is = require("../../styles/InputStyles");
const us = require("../../styles/ButtonStyles");
const ts = require("../../styles/TextStyles");
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCreateVehicleMutation } from "../../store/services/vehicleAPI";
import { add_vehicle } from "../../store/reducers/user.reducer";
import { Picker } from "@react-native-picker/picker";

export default function VehicleCreate({ vehicleOpen, setVehicleOpen }) {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [seats, setSeats] = useState("");
  const vehicleData = {
    type: type,
    brand: brand,
    color: color,
    plate: plate,
    seats: seats,
  };
  const [trigger, { data, error, isLoading }] = useCreateVehicleMutation();

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
      trigger({ body: vehicleData, token: token }).catch((err) =>
        console.log(err)
      );
    }, 5000);
    setVehicleOpen(!setVehicleOpen);
    console.log("pasa");
  };
  dispa;

  return (
    <React.Fragment>
      <Modal animationType="slide" transparent={true} visible={vehicleOpen}>
        <View style={bs.modalcontainer}>
          <View style={bs.modalstyle}>
            <Button
              title="Cerrar"
              onPress={() => setVehicleOpen(!setVehicleOpen)}
            />
            <TextFonted styles={ts.default}>
              Agrega un vehiculo a tu perfil de usuario.
            </TextFonted>
            <TextFonted styles={ts.default}>Tipo de vehiculo</TextFonted>
            <Picker
              style={{ width: "60%" }}
              dropdownIconColor="white"
              selectedValue={type}
              onValueChange={(itemValue, itemIndex) => setType(itemValue)}
            >
              <Picker.Item
                style={{ fontSize: 20 }}
                label="Automovil"
                value="car"
              />
              <Picker.Item
                style={{ fontSize: 20 }}
                label="Camioneta"
                value="truck"
              />
              <Picker.Item style={{ fontSize: 20 }} label="Moto" value="bike" />
            </Picker>
            <TextFonted styles={ts.default}>Marca</TextFonted>
            <TextInput
              style={is.default}
              value={brand}
              onChangeText={(newText) => setBrand(newText)}
            />
            <TextFonted styles={ts.default}>Color</TextFonted>
            <TextInput
              style={is.default}
              value={color}
              onChangeText={(newText) => setColor(newText)}
            />
            <TextFonted styles={ts.default}>Agrega la Placa</TextFonted>
            <TextInput
              style={is.default}
              value={plate}
              onChangeText={(newText) => setPlate(newText)}
            />
            <TextFonted styles={ts.default}>
              Numero de asientos disponibles
            </TextFonted>
            <TextInput
              style={is.default}
              value={seats}
              onChangeText={(newText) => setSeats(newText)}
              keyboardType="numeric"
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
