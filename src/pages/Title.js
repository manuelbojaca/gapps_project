import React from "react";
import { View, Button } from "react-native";

const bs = require("../styles/backgroundG");
import Logo from "../components/elements/Logo";

function Title({ navigation }) {
  return (
    <View style={bs.alwaysback}>
      <Logo />
      <Button title="Here" onPress={() => navigation.navigate("Signin")} />
    </View>
  );
}

export default Title;
