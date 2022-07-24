import React, { useEffect } from "react";
import { TextInput, View, Pressable } from "react-native";
import { useState } from "react";
import Logo from "../components/elements/Logo";
const bs = require("../styles/backgroundG");
const is = require("../styles/InputStyles");
const us = require("../styles/ButtonStyles");
const ts = require("../styles/TextStyles");
import TextFonted from "../styles/TextFonted";
import {
  useGetUserByIdMutation,
  useSigninMutation,
} from "../store/services/userAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { user_load } from "../store/reducers/user.reducer";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

function Signin({ navigation }) {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [trigger, { data, error, isLoading }] = useSigninMutation();
  const [getUserById, result] = useGetUserByIdMutation();

  useEffect(() => {
    console.log(data, error, isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (data) {
      getUserById({ id: data.id, token: data.token });
      setLogged(true);
      setTimeout(() => {
        console.log("Esperando");
        if (data.role === "passager") {
          navigation.navigate("Home");
        } else {
          navigation.navigate("Driver");
        }
      }, 1000);
    }
  }, [data]);

  useEffect(() => {
    console.log("Result: ", result?.data?.data);
    logged && dispatch(user_load(result?.data?.data));
  }, [result]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await trigger({
      email: email,
      password: password,
    })
      .then((data) => storeData("token", data.data.token))
      .catch((err) => console.log(err));
  };

  return (
    <View style={bs.alwaysback}>
      <Logo />
      <TextFonted styles={ts.default}>
        Inicia sesión, para comenzar a viajar
      </TextFonted>
      <TextFonted styles={ts.default}>Ingresa tu email</TextFonted>
      <TextInput
        style={is.default}
        value={email}
        onChangeText={(newText) => onChangeEmail(newText)}
        keyboardType="email-address"
      />
      <TextFonted styles={ts.default}>Ingresa tu contraseña</TextFonted>
      <TextInput
        style={is.default}
        value={password}
        onChangeText={(newText) => onChangePassword(newText)}
        secureTextEntry={true}
      />
      <Pressable style={us.getinto} onPress={handleSubmit}>
        <TextFonted styles={us.text}>INGRESAR</TextFonted>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <TextFonted styles={{ ...ts.default, marginTop: 20 }}>
          Registrarse
        </TextFonted>
      </Pressable>

      {error !== undefined && (
        <TextFonted color="white">Usuario o contraseña incorrectos</TextFonted>
      )}
    </View>
  );
}

export default Signin;
