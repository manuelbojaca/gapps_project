import React, { useEffect, useState } from "react";
import { TextInput, View, Pressable, Modal } from "react-native";
const bs = require("../styles/backgroundG");
const is = require("../styles/InputStyles");
const us = require("../styles/ButtonStyles");
const ts = require("../styles/TextStyles");
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCreateVehicleMutation } from "../../store/services/vehicleAPI";

const VehicleCreate = () => {
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
  const [trigger, {data, error, isLoading}] = useCreateVehicleMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await trigger(vehicleData)
      .catch((err) => console.log(err));

  };

  return (
    <View style={bs.alwaysback}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TextFonted styles={ts.default}>
            Agrega un vehiculo a tu perfil de usuario.
        </TextFonted>
        <TextFonted styles={ts.default}>Tipo de vehiculo</TextFonted>
        <TextInput
            style={is.default}
            value={type}
            onChangeText={(newText) => setType(newText)}
        />
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
      </Modal>
    </View>
  );
};
