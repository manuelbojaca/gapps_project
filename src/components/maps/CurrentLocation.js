import React from "react";
import { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { user_location } from "../../store/reducers/user.reducer";
import Spinner from "react-native-loading-spinner-overlay";

const CurrentLocation = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      dispatch(user_location(location.coords));
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log("text: ", location.coords);
  }
  console.log("Location:", location);

  return <React.Fragment></React.Fragment>;
};
export default CurrentLocation;
