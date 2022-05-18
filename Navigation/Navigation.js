import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import RestaurantDetail from "../screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/store";
import OrderCompleted from "../screens/OrderCompleted";
import UberHome from "../uberScreen/UberHome";
import UberDestination from "../uberScreen/UberDestination";
import UberMap from "../uberScreen/UberMap";
import OrdersTab from "../screens/tabScreens/OrdersTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Browse from "../screens/tabScreens/Browse";
import Grocery from "../screens/tabScreens/Grocery";
import Account from "../screens/tabScreens/Account";

const store = configureStore();
const Tab = createBottomTabNavigator();
const UberEatsStack = createStackNavigator();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          intialRouteName="UberHome"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="UberHome" component={UberHome} />
          <Stack.Screen name="UberEatsHome" component={UberEatsNavigator} />
          <Stack.Screen name="UberDestination" component={UberDestination} />
          <Stack.Screen name="UberMap" component={UberMap} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

const UberEatsNavigator = () => {
  return (
    <UberEatsStack.Navigator screenOptions={{ headerShown: false }}>
      <UberEatsStack.Screen name="Home" component={TabNavigator} />
      <UberEatsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
      <UberEatsStack.Screen name="OrderCompleted" component={OrderCompleted} />
    </UberEatsStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeEats"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="home" text="Home" />,
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="search" text="Browse" />,
        }}
      />
      <Tab.Screen
        name="Grocery"
        component={Grocery}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="shopping-bag" text="Grocery" />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersTab}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="receipt" text="Orders" />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="user" text="Account" />,
        }}
      />
    </Tab.Navigator>
  );
};

const Icon = (props) => (
  <View>
    <FontAwesome5
      name={props.name}
      size={25}
      style={{ margin: 3, alignSelf: "center" }}
    />
    <Text>{props.text}</Text>
  </View>
);
