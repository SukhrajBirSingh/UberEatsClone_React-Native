import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY =
  "wD-h_m_wBFZMgPE1Cc69jyE_LyCqX2xv4PYvRhdWqsT21h9hC2yRaVD78len4cgAAdKQfajas32cU-kqR0eD7YWaKvGpks_8BOYjXbmg4ON3a_EfIScualE6KSwqYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    const res = await fetch(yelpUrl, apiOptions);
    const json = await res.json();
    const businesses = json.businesses;
    const filteredBusinesses = businesses.filter((business) =>
      business.transactions.includes(activeTab.toLowerCase())
    );

    return setRestaurantData(
      filteredBusinesses.length === 0 ? businesses : filteredBusinesses
    );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
    //console.log(restaurantData);
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView
        style={{ backgroundColor: "#eee" }}
        showsVerticalScrollIndicator={false}
      >
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      {/* <BottomTabs navigation={navigation} /> */}
    </SafeAreaView>
  );
}
