import React from "react";
import { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { user_location } from "../../store/reducers/user.reducer";

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
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log("text: ", location.coords);
    dispatch(user_location(text));
  }

  return <React.Fragment></React.Fragment>;
};
export default CurrentLocation;
