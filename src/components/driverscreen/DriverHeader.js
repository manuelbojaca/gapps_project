import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import Logo from "../elements/Logo";
import TextFonted from "../../styles/TextFonted";
import Photo from "../elements/Photo";

const DriverHeader = () => {
  const { user } = useSelector((state) => state.users);
  console.log("User: ", user);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <View style={styles.header}>
      <Logo />
      <View>
        <TextFonted>{`${user.name} ${user.lastname}`}</TextFonted>
        <Photo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "right",
    //height: 30,
  },
});

export default DriverHeader;
