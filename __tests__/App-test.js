import React from "react";
import renderer from "react-test-renderer";
import UberCatrgories from "../uberComponents/uberHome/UberCatrgories";

jest.mock(
  "react-native-vector-icons/MaterialCommunityIcons",
  () => "MockedMaterialCommunityIcons"
);

test("<UberCategories/> renders correctly", () => {
  const tree = renderer.create(<UberCatrgories />).toJSON();
  expect(tree).toMatchSnapshot();
});
