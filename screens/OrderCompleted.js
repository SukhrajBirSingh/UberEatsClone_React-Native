import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
    </SafeAreaView>
  );
}
