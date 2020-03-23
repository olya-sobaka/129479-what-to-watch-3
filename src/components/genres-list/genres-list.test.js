import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";

const movies = [
  {
    title: `Kiki's Delivery Service`,
    posterSrc: `img/midnight-special.jpg`,
    id: 36,
    genre: `horror`
  },
  {
    title: `Kiki's Delivery Service`,
    posterSrc: `img/midnight-special.jpg`,
    id: 37,
    genre: `drama`
  },
  {
    title: `Kiki's Delivery Service`,
    posterSrc: `img/midnight-special.jpg`,
    id: 38,
    genre: `documentary`
  }
];

const handleGenreClick = () => {};

it(`renders correctly`, () => {

  const activeGenre = `horror`;

  const tree = renderer.create(
      <GenresList films={movies} activeGenre={activeGenre} onGenreClick={handleGenreClick} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
