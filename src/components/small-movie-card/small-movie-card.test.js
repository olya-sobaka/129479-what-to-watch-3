import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.js";

const movie = {
  title: `Kiki's Delivery Service`,
  posterSrc: `img/midnight-special.jpg`,
  id: 36
};

it(`SmallMovieCard renders correctly`, () => {
  const tree = renderer.create(
      <SmallMovieCard film={movie} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
