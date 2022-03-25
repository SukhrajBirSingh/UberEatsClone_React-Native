import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import env from "../../env";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";

export default function UberSearch(props) {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const locationHandler = () => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
      });
      setLocation(location);
      setIsLoading(false);
    })();
  };

  const dispatch = useDispatch();

  const selectedOrigin = (origin) => {
    dispatch({
      type: "SET_ORIGIN",
      payload: { origin },
    });
  };

  const selectedDestination = (destination) => {
    dispatch({
      type: "SET_DESTINATION",
      payload: { destination },
    });
  };

  useEffect(() => {
    console.log("wegot", location);
  }, [location]);

  return (
    <>
      <View style={{ marginTop: 15, flexDirection: "row" }}>
        <GooglePlacesAutocomplete
          query={{ key: env.googleApiKey }}
          autoFocus={true}
          fetchDetails={true}
          onPress={(data, details = null) => {
            const Currentcity = details.geometry.location;

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
              <TouchableOpacity
                onPress={() => {
                  locationHandler();
                  setIsLoading(true);
                }}
              >
                {isLoading ? (
                  <View>
                    <ActivityIndicator />
                  </View>
                ) : (
                  <MaterialCommunityIcons
                    name="location-enter"
                    size={20}
                    color={location ? "#4D96FF" : "gray"}
                  />
                )}
              </TouchableOpacity>
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
