import React from "react";
import renderer from "react-test-renderer";
import ReviewsTab from "./reviews-tab";

it(`ReviewsTab renders correctly`, () => {
  const tree = renderer.create(<ReviewsTab/>).toJSON();

  expect(tree).toMatchSnapshot();
});
