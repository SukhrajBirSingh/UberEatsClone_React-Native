import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import UberMap from "../uberComponents/uberDestination/UberMap";
import Greeting from "../uberComponents/uberDestination/Greeting";
import UberSearch from "../uberComponents/uberDestination/UberSearch";
import RecentLocations from "../uberComponents/uberHome/RecentLocations";
export default function UberDestination() {
  return (
    <>
      <UberMap />

      <Greeting />
      <UberSearch />
      <RecentLocations />
    </>
  );
}
