import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.js";

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

it(`MoviesList renders correctly`, () => {
  const tree = renderer.create(
      <MoviesList films={movies} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
