import { View, Text } from "react-native";
import RootNavigation from "./Navigation/Navigation";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import UberDestination from "./uberScreen/UberDestination";
import UberHome from "./uberScreen/UberHome";
import UberMap from "./uberScreen/UberMap";

export default function App() {
  return <RootNavigation />;
}
