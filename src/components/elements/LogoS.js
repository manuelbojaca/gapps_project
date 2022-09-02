import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image
      style={styles.driverlogo}
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
    marginTop: 10,
    width: 100,
    height: 80,
  },
});

export default Logo;
