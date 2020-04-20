import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.js";

const filmsByGenre = [
  {
    title: `Kiki's Delivery Service`,
    poster: `img/midnight-special.jpg`,
    id: 36,
    genre: `adventure`,
    year: 1989
  },
  {
    title: `Kiki's Delivery Service`,
    poster: `img/midnight-special.jpg`,
    id: 37,
    genre: `adventure`,
    year: 1989
  },
  {
    title: `Kiki's Delivery Service`,
    poster: `img/midnight-special.jpg`,
    id: 38,
    genre: `adventure`,
    year: 1989
  }
];

it(`MoviesList renders correctly`, () => {

  const mockFunc = () => {};

  const tree = renderer.create(
      <MoviesList onCardClick={mockFunc} filmsByGenre={filmsByGenre} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
