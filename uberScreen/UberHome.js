import { View, Text } from "react-native";
import React from "react";
import UberHeader from "../uberComponents/uberHome/UberHeader";
import UberCatrgories from "../uberComponents/uberHome/UberCatrgories";
import RecentLocations from "../uberComponents/uberHome/RecentLocations";

export default function UberHome({ navigation }) {
  return (
    <View>
      <UberHeader />
      <UberCatrgories navigation={navigation} />
      <RecentLocations />
    </View>
  );
}
