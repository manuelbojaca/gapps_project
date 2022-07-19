import React from "react";
import { TextInput, View, Pressable } from "react-native";
import { useState } from "react";
const Logo = require("../components/logo/Logo");
const bs = require("../styles/backgroundG");
const is = require("../styles/InputStyles");
const us = require("../styles/ButtonStyles");
const ts = require("../styles/TextStyles");
import TextFonted from "../styles/TextFonted";

function Signin({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate("Pruebas");
  };
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

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
    </View>
  );
}

export default Signin;
