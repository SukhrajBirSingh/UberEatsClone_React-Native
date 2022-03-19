import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import env from "../../env";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";

export default function UberSearch(props) {
  const [currentLocation, setCurrentLocation] = useState({});
  const origin = useSelector((state) => state.rideReducer.origin);
  // const destination = useSelector((state) => state.rideReducer.destination);

  // console.log("origin===", origin);
  //console.log(`destination====${destination.lng}`);

  const dispatch = useDispatch();
  //console.log(`origin=${origin.lat}`);

  const selectedOrigin = (origin) => {
    dispatch({
      type: "SET_ORIGIN",
      payload: { origin },
    });
    //console.log(`origin=${origin.lat}`);
  };

  const selectedDestination = (destination) => {
    dispatch({
      type: "SET_DESTINATION",
      payload: { destination },
    });
    // console.log(`destination=${destination.lat}`);
  };

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
            selectedOrigin(Currentcity);
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
              selectedDestination(destination);
              props.navigation.navigate("UberMap");
            }
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
