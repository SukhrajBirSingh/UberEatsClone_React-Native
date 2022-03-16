import { View, Text, ScrollView } from "react-native";
import React from "react";
import About from "../components/about/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/about/MenuItem";
import ViewCartButton from "../components/about/ViewCartButton";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} />
      <ViewCartButton navigation={navigation} />
    </View>
  );
}
