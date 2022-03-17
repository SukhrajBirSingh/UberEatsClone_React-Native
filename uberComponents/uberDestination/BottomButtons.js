import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function BottomButtons() {
  const [selected, setSelected] = useState("Rides");

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <BottomBtn
        selected={selected}
        setSelected={setSelected}
        title={"Rides"}
      />
      <BottomBtn selected={selected} setSelected={setSelected} title={"Eats"} />
    </View>
  );
}

const BottomBtn = (props) => (
  <TouchableOpacity
    style={{
      paddingVertical: 10,
      backgroundColor: props.selected === props.title ? "black" : "white",
      paddingHorizontal: 20,
      borderRadius: 30,
      margin: 10,
    }}
    onPress={() => {
      props.setSelected(props.title);
    }}
  >
    <Text
      style={{
        color: props.selected === props.title ? "white" : "black",
        fontSize: 16,
        fontWeight: "700",
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);
