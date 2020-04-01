import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const activeFilm = {
  title: `Kiki's Delivery Service`,
  poster: `img/midnight-special.jpg`,
  year: 1989,
  genre: `adventure`,
  id: 36
};

it(`MovieCard renders correctly`, () => {
  const tree = renderer.create(
      <MovieCard activeFilm={activeFilm}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
