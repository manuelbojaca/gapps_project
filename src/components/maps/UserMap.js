import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";
import CurrentLocation from "./CurrentLocation";

const UserMap = () => {
  console.log("map");
  const { location } = useSelector((state) => state.users);
  const [userLocation, setUserLocation] = useState({
    latitude: 4.1156735,
    longitude: -72.9301367,
  });

  location &&
    setUserLocation({
      latitude: location.latitude,
      longitude: location.longitude,
    });

  const [origin, setOrigin] = useState({
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
  });
  const [destination, setDestination] = useState({
    latitude: 4.700703,
    longitude: -74.143541,
  });

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          draggable
          coordinate={origin}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(direction) =>
            setDestination(direction.nativeEvent.coordinate)
          }
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor="pink"
          strokeWidth={8}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
