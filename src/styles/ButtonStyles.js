import { StyleSheet } from "react-native";
import theme from "./Theme";

module.exports = StyleSheet.create({
  getinto: {
    marginTop: theme.spacing.m,
    backgroundColor: theme.colors.title,
    padding: theme.spacing.xs,
  },
  radioBtn: {
    width: 70,
    height: 70,
    borderRadius: 400,
    backgroundColor: theme.colors.driverBtn,
  },
  text: {
    color: theme.colors.btntext,
    fontSize: theme.textsize.m,
  },
  textRadioBtn: {
    color: theme.colors.deftext,
    fontSize: theme.textsize.xl,
  },
});
