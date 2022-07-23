import * as React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import DriverHeader from "../components/driverscreen/DriverHeader";
const bs = require("../styles/backgroundG");

function Driver({ navigation }) {
  const { user } = useSelector((state) => state.users);
  console.log("User:", user);
  return (
    <View style={bs.driverback}>
      <DriverHeader />
    </View>
  );
}

export default Driver;
