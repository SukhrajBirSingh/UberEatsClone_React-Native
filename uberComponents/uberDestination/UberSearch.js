import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import env from "../../env";
import KeyboardSpacer from "react-native-keyboard-spacer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function UberSearch() {
  return (
    <>
      <View style={{ marginTop: 15, flexDirection: "row" }}>
        <GooglePlacesAutocomplete
          query={{ key: env.googleApiKey }}
          onPress={(data, details = null) => {
            const city = data.description.split(",")[0];
            console.log(city);
            //props.cityHandler(city);
          }}
          placeholder="Where to?"
          styles={{
            textInput: {
              backgroundColor: "#eee",
              //borderRadius: 20,
              fontWeight: "700",
              marginTop: 7,
            },

            textInputContainer: {
              backgroundColor: "#eee",
              //borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
            },
          }}
          renderRightButton={() => (
            <View
              style={{
                borderLeftWidth: 0.5,
                padding: 20,
                borderLeftColor: "gray",
              }}
            >
              <MaterialCommunityIcons
                name="car-arrow-right"
                size={25}
                color="gray"
              />
            </View>
          )}
        />
        <KeyboardSpacer />
      </View>
    </>
  );
}
