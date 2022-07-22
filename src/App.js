import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store/store";
import Title from "./pages/Title";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Pruebas from "./pages/Pruebas";
import Driver from "./pages/Driver";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Title"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Title" component={Title} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Driver" component={Driver} />
          <Stack.Screen name="Pruebas" component={Pruebas} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
