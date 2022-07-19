import { StyleSheet } from "react-native-web";

const palette = {
  red: "#FF1616",
  pink: "#EFD5CE",
  white: "#FFF",
  black: "#000",
  grey: "#222",
};

export const theme = {
  colors: {
    background: palette.red,
    title: palette.pink,
    inputbg: palette.white,
    btntext: palette.grey,
    deftext: palette.white,
  },
  spacing: {
    xs: 5,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textsize: {
    xs: 5,
    s: 8,
    m: 16,
    l: 20,
    xl: 40,
  },
  typography: StyleSheet.create({
    header: {
      fontFamily: "nunito-sans",
      fontSize: 36,
      fontWeight: "bold",
    },
    body: {
      fontFamily: "nunito-sans",
      fontSize: 16,
    },
    button: {
      fontFamily: "nunito-sans",
      fontSize: 8,
      color: "222222",
    },
  }),
};

export default theme;
