import React from "react";
import { Image, StyleSheet } from "react-native";

const Photo = () => {
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: "https://res.cloudinary.com/palgas-project/image/upload/v1658523492/users/user_adu2no.jpg",
      }}
    />
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 60,
    height: 60,
    borderRadius: 400,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Photo;
