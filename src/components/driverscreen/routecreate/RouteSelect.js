import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomple";

export default function RouteSelect() {
  const { location } = useSelector((state) => state.users);
  const [currentView, setCurrentView] = useState({
    latitude: 4.1156735,
    longitude: -72.9301367,
  });

  location &&
    setCurrentView({
      latitude: location.latitude,
      longitude: location.longitude,
    });

  const [origin, setOrigin] = useState({
    latitude: null,
    longitude: null,
  });

  const [destination, setDestination] = useState({
    latitude: null,
    longitude: null,
  });

  return (
    <React.Fragment>
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentView.latitude,
            longitude: currentView.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          {/*<Marker
            draggable
            coordinate={origin}
            onDragEnd={(direction) =>
              setOrigin(direction.nativeEvent.coordinate)
            }
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
          />*/}
        </MapView>
        <View>
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            fetchDetails={true}
            placeholder="Search"
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "es",
            }}
            onPress={(data, details = null) => {
              console.log("data", data);
              console.log("details", details);
              console.log(JSON.stringify(details?.geometry?.location));
            }}
            onFail={(error) => console.error(error)}
          />
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            fetchDetails={true}
            placeholder="Search"
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "es",
            }}
            onPress={(data, details = null) => {
              console.log("data", data);
              console.log("details", details);
              console.log(JSON.stringify(details?.geometry?.location));
            }}
            onFail={(error) => console.error(error)}
          />
        </View>
      </View>
    </React.Fragment>
  );
}
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
