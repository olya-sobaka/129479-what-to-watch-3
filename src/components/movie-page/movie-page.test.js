import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const films = [{
  title: `Kiki's Delivery Service`,
  poster: `img/midnight-special.jpg`,
  year: 1989,
  genre: `adventure`,
  id: 36
},
{
  title: `Kiki's Delivery Service`,
  poster: `img/midnight-special.jpg`,
  year: 1989,
  genre: `adventure`,
  id: 36
}];

it(`MoviePage should render correctly`, () => {
  const tree = renderer.create(
      <MoviePage films={films}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
