import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React from "react";

export default function BottomTabs({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <TouchableOpacity>
        <Icon name="shopping-bag" text="Grocery" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{}}
        onPress={() => navigation.navigate("Orders")}
      >
        <Icon name="receipt" text="Orders" />
      </TouchableOpacity>
      <Icon name="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <View>
    <FontAwesome5
      name={props.name}
      size={25}
      style={{ marginBottom: 3, alignSelf: "center" }}
    />
    <Text>{props.text}</Text>
  </View>
);
