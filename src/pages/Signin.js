import { TextInput, View, Text } from "react-native";
import { useState } from "react";
const Logo = require("../components/logo/Logo");
const s = require("../components/styles/backgroundG");

function Signin({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <View style={s.alwaysback}>
      <Logo />
      <Text>Inicia sesión</Text>
      <TextInput
        onChangeText={(newText) => onChangeEmail(newText)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={(newText) => onChangeEmail(newText)}
        secureTextEntry={true}
      />
    </View>
  );
}

export default Signin;
