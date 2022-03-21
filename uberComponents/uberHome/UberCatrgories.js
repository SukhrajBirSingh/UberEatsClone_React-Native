import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
  {
    id: 1,
    image: require("../../assets/uberAssets/images/UberX.png"),
    title: "Get a ride",
  },
  {
    id: 2,
    image: require("../../assets/uberAssets/images/uberEats.png"),
    title: "Order food",
  },
];

export default function UberCatrgories({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal: 20,
      }}
    >
      {data.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            if (item.id === 1) {
              navigation.navigate("UberDestination");
            } else {
              navigation.navigate("Home");
            }
          }}
          key={index}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "#eee",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <UberImage image={item.image} />
            <UberInfo title={item.title} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const UberImage = (props) => (
  <View
    style={{ alignItems: "center", justifyContent: "center", marginBottom: 25 }}
  >
    <Image
      source={props.image}
      style={{ height: 120, width: 150 }}
      resizeMode="contain"
    />
  </View>
);

const UberInfo = (props) => (
  <>
    <Text style={{ fontSize: 20, fontWeight: "600" }}>{props.title}</Text>
    <MaterialCommunityIcons
      name="arrow-right-circle"
      size={40}
      style={{ paddingTop: 20 }}
    />
  </>
);
