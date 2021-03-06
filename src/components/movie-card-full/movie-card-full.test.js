import React from "react";
import renderer from "react-test-renderer";
import MovieCardFull from "./movie-card-full";

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

it(`MovieCardFull should render correctly`, () => {

  const mockFunc = () => {};
  const activeTab = `overview`;

  const tree = renderer.create(
      <MovieCardFull films={films} onTabClick={mockFunc} activeTab={activeTab} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
