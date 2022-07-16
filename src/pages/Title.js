import { View, Button } from "react-native";

const s = require("../components/styles/backgroundG");
const Logo = require("../components/logo/Logo");

function Title({ navigation }) {
  return (
    <View style={s.alwaysback}>
      <Logo />
      <Button title="Here" onPress={() => navigation.navigate("Signin")} />
    </View>
  );
}

export default Title;
