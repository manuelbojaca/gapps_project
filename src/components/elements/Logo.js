import React from "react";
import { Image, StyleSheet } from "react-native";
const ls = require("../../styles/LogoStyles");

const Logo = () => {
  return (
    <Image
      style={ls.driverlogo}
      source={{
        uri: "https://res.cloudinary.com/palgas-project/image/upload/v1657900717/logo/GAppSTR_atsssx.png",
      }}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 100,
  },
  driverlogo: {
    width: 100,
    height: 100,
  },
});

export default Logo;
