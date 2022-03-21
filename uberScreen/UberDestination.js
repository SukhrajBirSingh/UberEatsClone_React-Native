import { View } from "react-native";
import React, { useState } from "react";
import Greeting from "../uberComponents/uberDestination/Greeting";
import UberSearch from "../uberComponents/uberDestination/UberSearch";
import RecentLocations from "../uberComponents/uberHome/RecentLocations";
import KeyboardSpacer from "react-native-keyboard-spacer";
import BottomButtons from "../uberComponents/uberDestination/BottomButtons";

export default function UberDestination({ navigation }) {
  return (
    <>
      <View style={{ overflow: "hidden", paddingBottom: 20 }}>
        <View
          style={{
            paddingBottom: 20,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          <Greeting navigation={navigation} />
          <UberSearch navigation={navigation} />
        </View>
      </View>
      <RecentLocations />
      <KeyboardSpacer />
    </>
  );
}
