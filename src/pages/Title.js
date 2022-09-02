import React from "react";
import { View, Button } from "react-native";

const bs = require("../styles/backgroundG");
import Logo from "../components/elements/Logo";
import CurrentLocation from "../components/maps/CurrentLocation";

function Title({ navigation }) {
  setTimeout(() => {
    navigation.navigate("Signin");
  }, 3000);
  return (
    <View style={bs.alwaysback}>
      <CurrentLocation />
      <Logo />
    </View>
  );
}

export default Title;
