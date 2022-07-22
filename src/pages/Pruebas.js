import React, { useEffect, useState } from "react";
import { useGetUsersQuery, useSigninQuery } from "../store/services/userAPI";
import { View, Text } from "react-native";
const s = require("../styles/backgroundG");
import * as SecureStore from "expo-secure-store";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getValueFor(key) {
  const result = await AsyncStorage.getItem(key);
  return result;
}

function Pruebas({ navigation }) {
  const { user } = useSelector((state) => state.users);
  console.log("User", user);
  try {
    var token = getValueFor("token");
  } catch (err) {
    console.log("Pruebas:", err);
  }
  console.log("Token: ", token);
  return (
    <View style={s.alwaysback}>
      {/*<Text>{`${data}`}</Text>
      <Text>{`${error}`}</Text>
      <Text>{`${isLoading}`}</Text>*/}
      <Text>{`${user.name}`}</Text>
    </View>
  );
}

export default Pruebas;
