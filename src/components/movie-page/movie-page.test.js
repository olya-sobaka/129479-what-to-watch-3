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

  const mockFunc = () => {};
  const currentFilm = {
    id: 10,
    genre: `comedy`
  };
  const activeTab = `overview`;

  const tree = renderer.create(
      <MoviePage films={films} onTabClick={mockFunc} currentFilm={currentFilm} activeTab={activeTab}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
