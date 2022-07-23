import * as React from "react";
import { View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import DriverHeader from "../components/driverscreen/DriverHeader";
const bs = require("../styles/backgroundG");
const us = require("../styles/ButtonStyles");
import theme from "../styles/Theme";
import TextFonted from "../styles/TextFonted";

function Driver({ navigation }) {
  const { user } = useSelector((state) => state.users);
  console.log("User:", user);
  return (
    <View style={bs.driverback}>
      <DriverHeader style={styles.header} />
      <View style={styles.content}>
        <Pressable style={us.radioBtn}>
          <TextFonted styles={us.textRadioBtn}>+</TextFonted>
        </Pressable>
      </View>
    </View>
  );
}

const styles = {
  header: {
    flex: 2,
  },
  content: {
    flex: 6,
    backgroundColor: theme.colors.title,
  },
};

export default Driver;
