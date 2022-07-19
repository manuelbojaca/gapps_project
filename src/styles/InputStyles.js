import { StyleSheet } from "react-native";
import theme from "./Theme";

module.exports = StyleSheet.create({
  default: {
    backgroundColor: theme.colors.inputbg,
    width: 300,
    padding: theme.spacing.xs,
    marginTop: theme.spacing.m,
    fontSize: 18,
    //fontFamily: "nunito-sans",
  },
});
