import React from "react";
import renderer from "react-test-renderer";
import DetailsTab from "./details-tab";

it(`DeatilsTab renders correctly`, () => {
  const tree = renderer.create(<DetailsTab/>).toJSON();
  expect(tree).toMatchSnapshot();
});
