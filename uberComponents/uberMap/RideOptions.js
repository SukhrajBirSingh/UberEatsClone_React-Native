import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-elements/dist/divider/Divider";

const data = [
  {
    id: 1,
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: 2,
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: 3,
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

export default function RideOptions() {
  const [selected, setSelected] = useState({});

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginRight: 35,
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        <Ionicons name="chevron-back" size={25} />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Select a ride
        </Text>
      </View>
      <ScrollView>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelected(item);
            }}
            style={{
              backgroundColor: item.id === selected.id ? "lightgray" : "white",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                //justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <RideImage image={item.image} />
              <RideInfo title={item.title} />

              <Text
                style={{
                  marginLeft: "auto",
                  marginRight: 10,
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                $20
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ConfirmUber />
    </>
  );
}

const RideImage = (props) => (
  <View>
    <Image
      source={{ uri: props.image }}
      style={{ width: 80, height: 80, resizeMode: "contain" }}
    />
  </View>
);

const RideInfo = (props) => (
  <View>
    <Text style={{ fontWeight: "600" }}>{props.title}</Text>
    <Text>15-20 drop-off</Text>
  </View>
);

const ConfirmUber = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <TouchableOpacity
      style={{
        backgroundColor: "black",
        marginBottom: 50,
        paddingVertical: 15,
        width: 240,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
        Confirm Uber
      </Text>
    </TouchableOpacity>
  </View>
);
