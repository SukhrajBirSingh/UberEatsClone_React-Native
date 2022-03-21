import { View, Text, ScrollView } from "react-native";
import React from "react";
import About from "../components/about/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/about/MenuItem";
import ViewCartButton from "../components/about/ViewCartButton";

const foods = [
  {
    title: "Chiken Wings",
    description:
      "Crispy organic whole wings, fish sauce, tamarind pineapple glazed sauce",
    price: "$18.95",
    image:
      "https://farmhousesanfrancisco.imenutogo.com/s/i/farmhouse_wings.jpg",
  },
  {
    title: "Tod Mun Kung",
    description:
      "Authentic Thai shrimp cake mixed with pork, garlic, cilantro, and mushroom soy sauce served with sweet plum sauce and cucumber",
    price: "$17.95",
    image: "https://farmhousesanfrancisco.imenutogo.com/s/i/s__14458896.jpg",
  },
  {
    title: "Crispy Calamari",
    description:
      "Curry battered Monterey squid in spicy pepper served with cilantro lime sauce.",
    price: "$17.50",
    image:
      "https://farmhousesanfrancisco.imenutogo.com/s/i/crispy_calamari.jpg",
  },
  {
    title: "Fresh Rolls",
    description:
      "Fresh rice paper roll, tofu, mixed green, bean sprouts, mint and vermicelli noodle. Chili peanut sauce.",
    price: "$15.95",
    image: "https://farmhousesanfrancisco.imenutogo.com/s/i/v.jpg",
  },
  {
    title: "Samosa",
    description:
      "Red Norland potato, caramelized onion, carrot wrapped in pastry skin served with coconut curry sauce.",
    price: "$13.50",
    image: "https://farmhousesanfrancisco.imenutogo.com/s/i/samosa.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCartButton navigation={navigation} />
    </>
  );
}
