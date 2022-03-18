import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import env from "../../env";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function UberSearch(props) {
  const [currentLocation, setCurrentLocation] = useState({});

  return (
    <>
      <View style={{ marginTop: 15, flexDirection: "row" }}>
        <GooglePlacesAutocomplete
          query={{ key: env.googleApiKey }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            const Currentcity = details.geometry.location;
            //console.log(data);
            // console.log(details.geometry.location);
            setCurrentLocation(Currentcity);
          }}
          placeholder="Current Location"
          styles={{
            textInput: {
              backgroundColor: "#eee",

              fontWeight: "500",
              height: 30,
            },

            textInputContainer: {
              backgroundColor: "#eee",
              //borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
            },
          }}
          renderLeftButton={() => (
            <View
              style={{
                borderRightWidth: 0.5,
                paddingHorizontal: 10,
                borderLeftColor: "gray",
              }}
            >
              <MaterialCommunityIcons
                name="location-enter"
                size={20}
                color="gray"
              />
            </View>
          )}
        />
      </View>
      <View style={{ marginTop: 15, flexDirection: "row" }}>
        <GooglePlacesAutocomplete
          query={{ key: env.googleApiKey }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            const destination = details.geometry.location;
            {
              currentLocation.lat
                ? props.navigation.navigate("UberMap", {
                    currentLocation,
                    destination,
                  })
                : "";
            }
            setCurrentLocation({});
          }}
          placeholder="Where to?"
          styles={{
            textInput: {
              backgroundColor: "#eee",

              fontWeight: "500",
              height: 30,
            },

            textInputContainer: {
              backgroundColor: "#eee",
              //borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
            },
          }}
          renderLeftButton={() => (
            <View
              style={{
                borderRightWidth: 0.5,
                paddingHorizontal: 10,
                borderLeftColor: "gray",
              }}
            >
              <MaterialCommunityIcons
                name="location-exit"
                size={20}
                color="gray"
              />
            </View>
          )}
        />
      </View>
    </>
  );
}
