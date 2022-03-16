import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐️ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 14,
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "600",
      color: "gray",
    }}
  >
    {props.description}
  </Text>
);
