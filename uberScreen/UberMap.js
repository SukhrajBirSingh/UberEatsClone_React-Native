import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import UberMapView from "../uberComponents/uberMap/UberMapView";
import RideOptions from "../uberComponents/uberMap/RideOptions";

export default function UberMap({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      <UberMapView />
      {isLoading ? (
        <View
          style={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <ActivityIndicator color="grey" size="large" />
        </View>
      ) : (
        <RideOptions navigation={navigation} />
      )}
    </>
  );
}
