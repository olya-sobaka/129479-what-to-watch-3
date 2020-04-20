/* eslint-disable indent */
import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.js";

const movie = {
  title: `Kiki's Delivery Service`,
  genre: `Drama/Fantasy`,
  year: 1989
};

const movies = [
  {
    title: `Kiki's Delivery Service`,
    poster: `img/midnight-special.jpg`,
    id: 36,
    genre: `horror`
  },
  {
    title: `Kiki's Delivery Service`,
    poster: `img/midnight-special.jpg`,
    id: 37,
    genre: `drama`
  },
  {
    title: `Kiki's Delivery Service`,
    poster: `img/midnight-special.jpg`,
    id: 38,
    genre: `documentary`
  }
];

it(`Main renders correctly`, () => {

  const genre = movies[0].genre;
  const mockFunc = () => {};

  const tree = renderer.create(
    <Main movie={movie}
          films={movies}
          onHeadingClick={mockFunc}
          genre={genre}
          onGenreClick={mockFunc}
          onCardClick={mockFunc}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
