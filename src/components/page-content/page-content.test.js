import React from "react";
import renderer from "react-test-renderer";
import PageContent from "./page-content";

const films = [
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

const mockFunc = () => {};

it(`PageContent renders correctly when prop genre is passed`, () => {

  const genre = `documentary`;

  const tree = renderer.create(
      <PageContent onGenreClick={mockFunc} onCardClick={mockFunc} films={films} genre={genre} />
  ).toJSON;

  expect(tree).toMatchSnapshot();
});

it(`PageContent renders correctly when prop moreLike is passed`, () => {

  const currentFilm = {
    id: 50,
    genre: `horror`
  };

  const tree = renderer.create(
      <PageContent onGenreClick={mockFunc} onCardClick={mockFunc} films={films} moreLike={true} currentFilm={currentFilm} />
  ).toJSON;

  expect(tree).toMatchSnapshot();
});
