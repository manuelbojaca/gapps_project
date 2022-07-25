import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Map from "../components/maps/UserMap";
import CurrentLocation from "../components/maps/CurrentLocation";
import { useSelector } from "react-redux";

function Home({ navigation }) {
  const user = useSelector((state) => state.users);
  console.log("User:", user);
  return (
    <View>
      <Map />
    </View>
  );
}

export default Home;
