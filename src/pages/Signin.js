import React, { useEffect } from "react";
import { TextInput, View, Pressable } from "react-native";
import { useState } from "react";
const Logo = require("../components/logo/Logo");
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
  const [logged, setlogged] = useState(false);
  const [trigger, { data, error, isLoading }] = useSigninMutation();
  const [getUserById, result] = useGetUserByIdMutation();

  useEffect(() => {
    console.log(data, error, isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (data) {
      getUserById({ id: data.id, token: data.token });
      setlogged(true);
      if (data.role === "passager") {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Pruebas");
      }
    }
  }, [data]);

  useEffect(() => {
    console.log("Result: ", result.data);
    logged && dispatch(user_load(result.data));
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
      <TextInput
        style={is.default}
        value={email}
        onChangeText={(newText) => onChangeEmail(newText)}
        keyboardType="email-address"
      />
      <TextInput
        style={is.default}
        value={password}
        onChangeText={(newText) => onChangePassword(newText)}
        secureTextEntry={true}
      />

      <Pressable style={us.getinto} onPress={handleSubmit}>
        <TextFonted styles={us.text}>INGRESAR</TextFonted>
      </Pressable>
      <TextFonted
        styles={{ ...ts.default, marginTop: 20 }}
        //onPress={navigation.navigate("Register")}
      >
        Registrarse
      </TextFonted>
      {error !== undefined && (
        <TextFonted color="white">Usuario o contraseña incorrectos</TextFonted>
      )}
    </View>
  );
}

export default Signin;
