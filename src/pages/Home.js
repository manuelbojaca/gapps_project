import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Map from "../components/maps/Map";
import CurrentLocation from "../components/maps/CurrentLocation";

function Home({ navigation }) {
  return (
    <View>
      <CurrentLocation />
      <Map />
    </View>
  );
}

export default Home;
