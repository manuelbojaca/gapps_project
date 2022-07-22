import React, { useEffect } from "react";
import { TextInput, View, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
const Logo = require("../components/logo/Logo");
import TextFonted from "../styles/TextFonted";
const bs = require("../styles/backgroundG");
const is = require("../styles/InputStyles");
const us = require("../styles/ButtonStyles");
const ts = require("../styles/TextStyles");
import RadioButtonRN from "radio-buttons-react-native";
import { useSignupMutation } from "../store/services/userAPI";
import { useDispatch } from "react-redux";
import { user_load } from "../store/reducers/user.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

function Register({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [logged, setLogged] = useState(false);
  const [getUserById, result] = useGetUserByIdMutation();
  const radioData = [
    {
      label: "passenger",
    },
    {
      label: "driver",
    },
  ];
  const userData = {
    name: name,
    lastname: lastname,
    email: email,
    phone: phone,
    password: password,
    role: role.label,
  };
  const [trigger, { data, error, isLoading }] = useSignupMutation();

  useEffect(() => {
    console.log(data, error, isLoading);
    if (data !== undefined) {
    }
  }, [isLoading]);

  useEffect(() => {
    if (data) {
      getUserById({ id: data.id, token: data.token });
      setLogged(true);
      if (data.role === "passager") {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Driver");
      }
    }
  }, [data]);

  useEffect(() => {
    console.log("Result: ", result?.data?.data);
    logged && dispatch(user_load(result?.data?.data));
  }, [result]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await trigger(userData)
      .then((data) => storeData("token", data.token))
      .catch((err) => console.log(err));
    console.log(userData);
  };

  return (
    <View style={bs.alwaysback}>
      <Logo />
      <TextFonted styles={ts.default}>Crea tu perfil de usuario.</TextFonted>
      <TextFonted styles={ts.default}>Nombre</TextFonted>
      <TextInput
        style={is.default}
        value={name}
        onChangeText={(newText) => setName(newText)}
      />
      <TextFonted styles={ts.default}>Apellido</TextFonted>
      <TextInput
        style={is.default}
        value={lastname}
        onChangeText={(newText) => setLastname(newText)}
      />
      <TextFonted styles={ts.default}>Email</TextFonted>
      <TextInput
        style={is.default}
        value={email}
        onChangeText={(newText) => setEmail(newText)}
        keyboardType="email-address"
      />
      <TextFonted styles={ts.default}>Telefono</TextFonted>
      <TextInput
        style={is.default}
        value={phone}
        onChangeText={(newText) => setPhone(newText)}
        keyboardType="numeric"
      />
      <TextFonted styles={ts.default}>Contraseña</TextFonted>
      <TextInput
        style={is.default}
        value={password}
        onChangeText={(newText) => setPassword(newText)}
        secureTextEntry={true}
      />
      <RadioButtonRN
        boxStyle={{ height: 20 }}
        data={radioData}
        selectedBtn={(e) => setRole(e)}
      />
      <Pressable style={us.getinto} onPress={handleSubmit}>
        <TextFonted styles={us.text}>REGISTRATE</TextFonted>
      </Pressable>
    </View>
  );
}

export default Register;
