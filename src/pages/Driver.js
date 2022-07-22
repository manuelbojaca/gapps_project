import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import TextFonted from "../styles/TextFonted";

function Driver({ navigation }) {
  const user = useSelector((state) => state.users);
  console.log("User:", user);
  return (
    <View>
      <TextFonted>{}</TextFonted>
    </View>
  );
}

export default Driver;
