import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useDispatch, useSelector } from "react-redux";

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

const SURGE_CHARGE_RATE = 1.5;

export default function RideOptions(props) {
  const travelInfo = useSelector((state) => state.rideReducer.travelInfo);
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
        <Ionicons
          name="chevron-back"
          size={25}
          onPress={() => {
            props.navigation.goBack();
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Select a ride • {travelInfo.info.distance.text}
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
              <RideInfo
                title={item.title}
                duration={travelInfo.info.duration.text}
              />

              <Text
                style={{
                  marginLeft: "auto",
                  marginRight: 10,
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                {new Intl.NumberFormat("en-ca", {
                  style: "currency",
                  currency: "CAD",
                }).format(
                  (travelInfo.info.duration.value *
                    SURGE_CHARGE_RATE *
                    item.multiplier) /
                    100
                )}
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
    <Text>{props.duration} Travel Time</Text>
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
