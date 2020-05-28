import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

it(`Tabs renders correctly`, () => {

  const mockFunc = () => {};
  const activeItem = `reviews`;

  const tree = renderer.create(
      <Tabs updateActiveItem={mockFunc} activeItem={activeItem}/>
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
