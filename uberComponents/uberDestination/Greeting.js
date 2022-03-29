import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Greeting({ navigation }) {
  var today = new Date();
  var time = today.getHours();
  console.log(time);

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 20,
          marginBottom: 10,
          flexDirection: "row",
          marginLeft: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={35}
            style={{ marginRight: 0 }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            marginLeft: 70,
          }}
        >
          {time <= 12 ? "Good Morning!" : "Good Evening!"}
        </Text>
      </SafeAreaView>
      <Divider width={1} />
    </>
  );
}
