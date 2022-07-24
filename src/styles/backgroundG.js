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
  modalcontainer: {
    flex: 1,
    justifyContent: "center",
  },
  modalstyle: {
    backgroundColor: theme.colors.background,
    margin: 20,
    boderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: theme.colors.modalshadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardstyle: {
    backgroundColor: theme.colors.backgroundcards,
    margin: 20,
    boderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: theme.colors.modalshadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
