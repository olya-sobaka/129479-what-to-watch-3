import React from "react";
import renderer from "react-test-renderer";
import App from "./app.js";

const movie = {
  title: `Kiki's Delivery Service`,
  genre: `Drama/Fantasy`,
  year: 1989
};

const movieNames = [`My Neighbor Totoro`, `Spirited Away`];

it(`App renders correctly`, () => {
  const tree = renderer.create(
      <App movie={movie} movieNames={movieNames} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
