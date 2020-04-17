import React from "react";
import renderer from "react-test-renderer";
import OverviewTab from "./overview-tab";

it(`OverviewTab renders correctly`, () => {
  const tree = renderer.create(<OverviewTab/>).toJSON;

  expect(tree).toMatchSnapshot();
});
