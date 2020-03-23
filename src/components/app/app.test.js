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
    id: 36,
    genre: `documentary`
  },
  {
    title: `Kiki's Delivery Service`,
    posterSrc: `img/midnight-special.jpg`,
    id: 37,
    genre: `horror`
  },
  {
    title: `Kiki's Delivery Service`,
    posterSrc: `img/midnight-special.jpg`,
    id: 38,
    genre: `comedy`
  }
];

it(`App renders correctly`, () => {

  const genre = `drama`;
  const onGenreClick = () => {};

  const tree = renderer.create(
      <App movie={movie} films={movies} genre={genre} onGenreClick={onGenreClick} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
