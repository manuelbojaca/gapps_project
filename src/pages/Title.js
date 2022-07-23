import React from "react";
import { View, Button } from "react-native";

const s = require("../styles/backgroundG");
import Logo from "../components/elements/Logo";

function Title({ navigation }) {
  return (
    <View style={s.alwaysback}>
      <Logo />
      <Button title="Here" onPress={() => navigation.navigate("Signin")} />
    </View>
  );
}

export default Title;
