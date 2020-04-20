import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

it(`Tabs renders correctly`, () => {

  const mockFunc = () => {};
  const activeTab = `reviews`;

  const tree = renderer.create(
      <Tabs onTabClick={mockFunc} activeTab={activeTab}/>
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
