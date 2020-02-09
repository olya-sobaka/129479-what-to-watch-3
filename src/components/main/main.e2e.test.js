import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.js";

const movie = {
  title: `Kiki's Delivery Service`,
  genre: `Drama/Fantasy`,
  year: 1989
};

const movieNames = [`My Neighbor Totoro`, `Spirited Away`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movie heading should be pressed`, () => {
  const onHeadingClick = jest.fn();

  const main = shallow(
      <Main
        movie={movie}
        movieNames={movieNames}
        onHeadingClick={onHeadingClick}
      />
  );

  const movieHeading = main.find(`.small-movie-card__title`).at(0 && 1);

  movieHeading.props().onClick();

  expect(onHeadingClick.mock.calls.length).toBe(1);
});
