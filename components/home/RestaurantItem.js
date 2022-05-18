import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "http://images.summitmedia-digital.com/yummyph/images/2021/04/26/stew.jpg",
    categories: ["cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://media.gettyimages.com/photos/cozy-restaurant-for-gathering-with-friends-picture-id1159992039?s=612x612",
    categories: ["cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4,
  },
  {
    name: "Beachside Bar",
    image_url:
      "http://images.summitmedia-digital.com/yummyph/images/2021/04/26/stew.jpg",
    categories: ["cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.5,
  },
];

export default function RestaurantItem({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restraunt, index) => (
        <TouchableOpacity
          activeOpacity={1}
          key={index}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restraunt.name,
              image: restraunt.image_url,
              price: restraunt.price,
              reviews: restraunt.review_count,
              rating: restraunt.rating,
              categories: restraunt.categories,
            })
          }
        >
          <View
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: "white",
            }}
          >
            <RestaurantImage image={restraunt.image_url} />
            <RestaurantInfo name={restraunt.name} rating={restraunt.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180, borderRadius: 10 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="red" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
