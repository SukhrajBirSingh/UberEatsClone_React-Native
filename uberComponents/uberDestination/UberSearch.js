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
import Ionicons from "react-native-vector-icons/Ionicons";

import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";

export default function UberSearch(props) {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

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
      dispatch({
        type: "SET_ORIGIN",
        payload: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });
      setIsLoading(false);
      //console.log("wegot", location.coords);
    })();
  };

  const selectedOrigin = (origin) => {
    dispatch({
      type: "SET_ORIGIN",
      payload: { lat: origin.lat, lng: origin.lng },
    });
  };

  const selectedDestination = (destination) => {
    dispatch({
      type: "SET_DESTINATION",
      payload: { lat: destination.lat, lng: destination.lng },
    });
  };

  // useEffect(() => {
  //   console.log("wegot", location);
  // }, [location]);

  return (
    <>
      {location ? (
        <View style={{ marginTop: 15, marginLeft: 10, flexDirection: "row" }}>
          <Ionicons name="location" size={18} color="#4D96FF" />
          <Text style={{ color: "#4D96FF", fontSize: 15, marginLeft: 5 }}>
            Current Location
          </Text>
        </View>
      ) : (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
          <GooglePlacesAutocomplete
            query={{ key: env.googleApiKey }}
            autoFocus={true}
            fetchDetails={true}
            onPress={(data, details = null) => {
              const Currentcity = details.geometry.location;

              selectedOrigin(Currentcity);
            }}
            placeholder="Current Location (hit left icon)"
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
                    <Ionicons name="location" size={20} color="gray" />
                  )}
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
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
