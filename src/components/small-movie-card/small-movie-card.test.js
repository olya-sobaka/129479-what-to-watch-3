import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.js";

const movie = {
  title: `Kiki's Delivery Service`,
  posterSrc: `img/midnight-special.jpg`,
  id: 36,
  previewMp4: `https://coverr.co/videos/norway-road-f0J1etTrcQ`,
  previewWebm: `https://coverr.co/videos/morning-sunshine-Of9KYVXN1C`
};

it(`renders correctly`, () => {
  const tree = renderer.create(
      <SmallMovieCard film={movie} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`renders VideoPlayer component when the card is active`, () => {
  const id = 36;

  const tree = renderer.create(
      <SmallMovieCard film={movie} activeCardId={id} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`renders an image when the card is not active`, () => {
  const id = 4;

  const tree = renderer.create(
      <SmallMovieCard film={movie} activeCardId={id} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`renders an image when the card is not active`, () => {
  const id = null;

  const tree = renderer.create(
      <SmallMovieCard film={movie} activeCardId={id} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
