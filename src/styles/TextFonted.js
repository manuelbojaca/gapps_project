import React, { useState } from "react";
import * as Font from "expo-font";
import { View, Text } from "react-native";

const TextFonted = (props) => {
  const [loaded] = Font.useFonts({
    "nunito-sans": require("../../assets/fonts/NunitoSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text style={{ fontFamily: "nunito-sans", ...props.styles }}>
        {props.children}
      </Text>
    </View>
  );
};

export default TextFonted;
