import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

export default function Greeting() {
  return (
    <>
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 20 }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Good Morning!</Text>
      </View>
      <Divider width={1} />
    </>
  );
}
