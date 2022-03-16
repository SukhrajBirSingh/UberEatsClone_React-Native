import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";
import "firebase/firestore";
import LottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ViewCartButton({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  //price = $13.50
  //"13.50"
  //Number{"13.50"}
  //[13.50, 20.5, 19.5]
  //reduce => [13.5 + 20.5 + 19.5] => [45]

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const addToFirebase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        /// Adding the timer@@@@@@@@@@@@@@@@
        setTimeout(() => {
          setLoading(false);

          navigation.navigate("OrderCompleted");
        }, 2500);
      });
  };

  const checkoutModalContext = () => {
    return (
      //Modal View @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <View style={{ height: 260, marginTop: 10 }}>
              <ScrollView>
                {items.map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))}
                <View style={styles.subtotalContainer}>
                  <Text style={styles.subtotalText}>Subtotal</Text>
                  <Text style={styles.subtotalText}>{totalUSD}</Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  backgroundColor: "black",
                  borderRadius: 30,
                  width: 240,
                  padding: 13,
                  alignItems: "center",
                  position: "relative",
                }}
                onPress={() => {
                  addToFirebase();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ alignItems: "center", marginTop: 20 }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContext()}
      </Modal>
      {total ? ( // if check ****************************
        <View // ButtonView@@@@@@@@@@@@@@@
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 50, // adjust the position on button on Screen
            zIndex: 999,
            //backgroundColor: "green",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subtotalText: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
});
