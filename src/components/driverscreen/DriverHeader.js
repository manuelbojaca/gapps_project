import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import LogoS from "../elements/LogoS";
import TextFonted from "../../styles/TextFonted";
import Photo from "../elements/Photo";
import theme from "../../styles/Theme";

const DriverHeader = () => {
  const { user } = useSelector((state) => state.users);
  console.log("User: ", user);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(user.name);
  }, [user]);

  return (
    <View>
      <View style={styles.header}>
        <LogoS />
        <View style={styles.data}>
          <TextFonted styles={styles.text}>{`Hola, ${name}`}</TextFonted>
          <Photo />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    //alignItems: "center",
    //justifyContent: "center",
    //height: 30,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "100",
    fontSize: theme.textsize.xl,
    color: theme.colors.deftext,
  },
});

export default DriverHeader;
