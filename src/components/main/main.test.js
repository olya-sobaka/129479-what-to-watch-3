/* eslint-disable indent */
import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.js";

const movie = {
  title: `Kiki's Delivery Service`,
  genre: `Drama/Fantasy`,
  year: 1989
};

const movieTitles = [`My Neighbor Totoro`, `Spirited Away`];

it(`Main renders correctly`, () => {
  const tree = renderer.create(
    <Main movie={movie} movieTitles={movieTitles} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
