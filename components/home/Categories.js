import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const items = [
  {
    Image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-Up",
  },
  {
    Image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    Image: require("../../assets/images/bread.png"),
    text: "Bakery",
  },
  {
    Image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    Image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
  {
    Image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    Image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    Image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/*loop start here */}
        {items.map((item, index) => (
          <TouchableOpacity key={index}>
            <View
              style={{
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#eee",
                  borderRadius: 10,
                  marginBottom: 5,
                }}
              >
                <Image
                  source={item.Image}
                  style={{
                    width: 50,
                    height: 40,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <Text style={{ fontSize: 11, fontWeight: "500" }}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {/*loop ends here */}
      </ScrollView>
    </View>
  );
}
