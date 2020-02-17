import React from "react";
import renderer from "react-test-renderer";
import App from "./app.js";

const movie = {
  title: `Kiki's Delivery Service`,
  genre: `Drama/Fantasy`,
  year: 1989
};

const movies = [
  {
    title: `Kiki's Delivery Service`,
    posterSrc: `img/midnight-special.jpg`,
    id: 36
  },
  {
    title: `Kiki's Delivery Service`,
    posterSrc: `img/midnight-special.jpg`,
    id: 37
  },
  {
    title: `Kiki's Delivery Service`,
    posterSrc: `img/midnight-special.jpg`,
    id: 38
  }
];

it(`App renders correctly`, () => {
  const tree = renderer.create(
      <App movie={movie} films={movies} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
