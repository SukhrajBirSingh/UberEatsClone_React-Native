import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function UberHeader() {
  return (
    <SafeAreaView>
      <MaterialCommunityIcons name="menu" size={35} style={{ padding: 20 }} />
      <Text style={{ fontSize: 60, padding: 20, fontWeight: "600" }}>Uber</Text>
    </SafeAreaView>
  );
}
