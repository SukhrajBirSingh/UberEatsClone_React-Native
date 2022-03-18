import { View, Text } from "react-native";
import React from "react";
import UberMapView from "../uberComponents/uberMap/UberMapView";
import RideOptions from "../uberComponents/uberMap/RideOptions";

export default function UberMap({ route, navigation }) {
  return (
    <>
      <UberMapView route={route} />
      <RideOptions />
    </>
  );
}
