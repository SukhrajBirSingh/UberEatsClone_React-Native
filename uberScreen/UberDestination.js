import { View } from "react-native";
import React, { useState } from "react";
import Greeting from "../uberComponents/uberDestination/Greeting";
import UberSearch from "../uberComponents/uberDestination/UberSearch";
import RecentLocations from "../uberComponents/uberHome/RecentLocations";
import KeyboardSpacer from "react-native-keyboard-spacer";
import BottomButtons from "../uberComponents/uberDestination/BottomButtons";

export default function UberDestination({ navigation }) {
  const [currentLocation, setCurrentLocation] = useState("Edmonton,ON,Canada");
  const [destination, setDestination] = useState("");

  return (
    <>
      {console.log(currentLocation)}
      {console.log(destination)}
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
          <UberSearch
            currentCityHandler={setCurrentLocation}
            destinationHandler={setDestination}
          />
        </View>
      </View>
      <RecentLocations />
      <BottomButtons />
      <KeyboardSpacer />
    </>
  );
}
