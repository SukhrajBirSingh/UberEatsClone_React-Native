import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import "firebase/firestore";

export default function OrdersTab() {
  const [orders, setOrders] = useState({
    items: [
      {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
        restaurantName: "c",
      },
    ],
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setOrders(doc.data());
        });
      });

    return () => unsubscribe(); //return using calling anonyms function
    //you can not call unsubscribe directly
  }, []);
  console.log("##########");
  console.log(orders);

  return (
    <>
      {orders.items.map((order, index) => (
        <View key={index} style={styles.menuItemStyle}>
          <ImageView image={order.image} />
          <DescriptionView
            restaurantName={order.restaurantName}
            title={order.title}
            description={order.description}
            price={order.price}
          />
        </View>
      ))}
    </>
  );
}

const ImageView = (props) => (
  <View>
    <Image
      source={{ uri: props.image }}
      style={{ width: 100, height: 100, borderRadius: 10 }}
    />
  </View>
);

const DescriptionView = (props) => (
  <View>
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.restaurantName}</Text>
      <Text style={{ color: "black", fontWeight: "600" }}>{props.title}</Text>
      <Text style={{ color: "gray" }}>{props.description}</Text>
      <Text>{props.price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
