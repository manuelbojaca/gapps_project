import React, { useEffect, useState } from "react";
import { View, Pressable, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import VehicleCreate from "../components/driverscreen/VehicleCreate";
import DriverHeader from "../components/driverscreen/DriverHeader";
import VehicleCard from "../components/driverscreen/VehicleCard";
const bs = require("../styles/backgroundG");
const us = require("../styles/ButtonStyles");
import theme from "../styles/Theme";
import TextFonted from "../styles/TextFonted";
import { useGetUserByIdMutation } from "../store/services/userAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { user_load } from "../store/reducers/user.reducer";
import RouteCreate from "../components/driverscreen/routecreate/RouteCreate";

function Driver({ navigation }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  console.log("UserDriver:", user);
  const [getUserById, { data, error, isLoading }] = useGetUserByIdMutation();
  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);
  let token;

  async function getValueFor(key) {
    let result = await AsyncStorage.getItem(key);
    return result;
  }

  useEffect(() => {
    (async () => {
      token = await getValueFor("token");
      console.log("TokenDriver:", token, "Data: ", data, user._id);
      await getUserById({ id: user._id, token: token });
      console.log("InnerData:", data);
      data && dispatch(user_load(data?.data));
    })();
  }, [setVehicleOpen]);

  return (
    <View style={bs.driverback}>
      <VehicleCreate
        vehicleOpen={vehicleOpen}
        setVehicleOpen={setVehicleOpen}
      />
      <RouteCreate routesOpen={routesOpen} setRoutesOpen={setRoutesOpen} />
      <DriverHeader style={styles.header} />
      <ScrollView style={styles.content}>
        <TextFonted></TextFonted>
        {user.vehicle !== undefined ? (
          <VehicleCard vehicle={user.vehicle} />
        ) : (
          <Pressable
            style={us.radioBtn}
            onPress={() => setVehicleOpen(!vehicleOpen)}
          >
            <TextFonted styles={us.textRadioBtn}>Agrega un vehiculo</TextFonted>
          </Pressable>
        )}
        {user.vehicle && (
          <Pressable
            style={us.radioBtn}
            onPress={() => setRoutesOpen(!routesOpen)}
          >
            <TextFonted styles={us.textRadioBtn}>Agrega una ruta</TextFonted>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}

const styles = {
  header: {
    flex: 2,
  },
  content: {
    flex: 6,
    backgroundColor: theme.colors.title,
  },
};

export default Driver;
