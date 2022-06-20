import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Data = [
  { name: "shield", title: "Covid 19 Measures" },
  { name: "heart", title: "Your Favorite" },
  { name: "cards-diamond", title: "Restaurant Rewads" },
  { name: "credit-card", title: "Payment" },
  { name: "lifebuoy", title: "Help" },
  { name: "ticket", title: "Promotion" },
];
export default function Account() {
  return (
    <View style={{}}>
      <UserTitle />
      <ListView />
    </View>
  );
}

const UserTitle = () => (
  <View
    style={{
      flexDirection: "row",

      justifyContent: "flex-start",
      alignItems: "center",
      margin: 10,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      // backgroundColor: "green",
    }}
  >
    <Image
      source={{
        uri: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      }}
      style={{ width: 70, height: 70, marginHorizontal: 10, borderRadius: 35 }}
    />
    <View>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Sukhraj Bir Singh</Text>
      <Text style={{ color: "green", fontWeight: "600" }}>View Account</Text>
    </View>
  </View>
);

const ListView = () => (
  <ScrollView>
    {Data.map((item, index) => (
      <TouchableOpacity key={index}>
        <View
          style={{
            flexDirection: "row",
            margin: 25,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name={item.name} size={35} />
          <Text
            style={{ fontSize: 22, fontWeight: "600", marginHorizontal: 10 }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
);
