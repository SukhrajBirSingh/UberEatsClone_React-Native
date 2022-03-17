import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RecentLocations() {
  return (
    <View>
      <Text style={styles.text}>Go again</Text>

      <View style={styles.rowView}>
        <View style={styles.iconBackground}>
          <MaterialCommunityIcons name="clock" size={20} color="white" />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Work</Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
            1455 Market Street
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBackground: {
    backgroundColor: "lightgray",
    borderRadius: 30,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  rowView: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",

    //backgroundColor: "red",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
    marginLeft: 20,
    marginTop: 30,
  },
});
