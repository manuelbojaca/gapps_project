import { StyleSheet } from "react-native";
import theme from "./Theme";

module.exports = StyleSheet.create({
  alwaysback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    height: "100%",
  },
  driverback: {
    flex: 1,
    backgroundColor: theme.colors.background,
    height: "100%",
  },
});
