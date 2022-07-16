import { Image, StyleSheet } from "react-native";

module.exports = () => {
  return (
    <Image
      style={styles.logo}
      source={{
        uri: "https://res.cloudinary.com/palgas-project/image/upload/v1657900717/logo/GAppSTR_atsssx.png",
      }}
    />
  );
};

export const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 100,
  },
});
