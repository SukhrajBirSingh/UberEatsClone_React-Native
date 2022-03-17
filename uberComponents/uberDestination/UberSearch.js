import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import env from "../../env";
import KeyboardSpacer from "react-native-keyboard-spacer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function UberSearch(props) {
  return (
    <>
      <View style={{ marginTop: 15, flexDirection: "row" }}>
        <GooglePlacesAutocomplete
          query={{ key: env.googleApiKey }}
          onPress={(data, details = null) => {
            const Currentcity = data.description.split(",")[0];
            //console.log(city);
            props.currentCityHandler(Currentcity);
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
          onPress={(data, details = null) => {
            const Destinationcity = data.description.split(",")[0];
            //console.log(city);
            props.destinationHandler(Destinationcity);
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
