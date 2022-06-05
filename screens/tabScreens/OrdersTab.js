import "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import firebase from "../../firebase";

export default function OrdersTab() {
  const [orders, setOrders] = useState([]);

  // const Data = [];

  const data = [];
  useEffect(() => {
    fetch();

    //return using calling anonyms function
    //you can not call unsubscribe directly
  }, []);

  const fetch = useCallback(async () => {
    const db = firebase.firestore();

    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(7)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          data.push(doc.data());
          if (snapshot.docs.length === data.length) {
            setOrders(data);
          }
        });
      });
    return () => unsubscribe();
  }, []);

  return (
    <ScrollView>
      {orders.map((item, index) => (
        <View key={index} style={styles.menuItemStyle}>
          <ImageView image={item.items[0].image} />
          <View
            style={{
              width: 200,
              // height: 100,
            }}
          >
            <TitleView title={item.items[0].restaurantName} />
            {item.items.map((data, index) => (
              <View View key={index}>
                <DescriptionView
                  title={data.title}
                  description={data.description}
                  price={data.price}
                />
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
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

const TitleView = (props) => (
  <View>
    <Text style={styles.titleStyle}>{props.title}</Text>
  </View>
);

const DescriptionView = (props) => (
  <View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        //backgroundColor: "pink",
      }}
    >
      <Text style={{ fontWeight: "900", fontSize: 14 }}>•</Text>
      <Text
        style={{
          color: "black",
          fontWeight: "600",
          paddingHorizontal: 2,
          fontSize: 14,
        }}
      >
        {props.title}
      </Text>
    </View>
    <Text style={{ paddingHorizontal: 7 }}>{props.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    // alignItems: "center",
    // backgroundColor: "pink",
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 3,
  },
});
