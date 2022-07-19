import React from "react";
import { useGetUsersQuery } from "../store/services/userAPI";
import { View, Text } from "react-native";

function Pruebas({ navigation }) {
  const { data, error, isLoading } = useGetUsersQuery();
  console.log(data, error, isLoading);

  return (
    <View>
      <Text>{`${data}`}</Text>
      <Text>{`${error}`}</Text>
      <Text>{`${isLoading}`}</Text>
    </View>
  );
}

export default Pruebas;
