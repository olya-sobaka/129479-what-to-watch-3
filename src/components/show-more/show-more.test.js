import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more";

it(`ShowMore should render correctly`, () => {

  const mockFunc = () => {};

  const tree = renderer.create(<ShowMore onShowMoreClick={mockFunc}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
