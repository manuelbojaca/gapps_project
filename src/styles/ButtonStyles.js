import { StyleSheet } from "react-native";
import theme from "./Theme";

module.exports = StyleSheet.create({
  getinto: {
    marginTop: theme.spacing.m,
    backgroundColor: theme.colors.title,
    padding: theme.spacing.xs,
  },
  text: {
    color: theme.colors.btntext,
    fontSize: theme.textsize.m,
  },
});
