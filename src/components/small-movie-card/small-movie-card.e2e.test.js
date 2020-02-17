import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.js";

const movie = {
  title: `Kiki's Delivery Service`,
  posterSrc: `img/midnight-special.jpg`,
  id: 36
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`SmallMovieCard heading should be pressed`, () => {
  const onHeadingClick = jest.fn();

  const main = shallow(
      <SmallMovieCard
        film={movie}
        onHeadingClick={onHeadingClick}
      />
  );

  const movieHeading = main.find(`.small-movie-card__title`);

  movieHeading.props().onClick();

  expect(onHeadingClick.mock.calls.length).toBe(1);
});


it(`SmallMovieCard onMouseOver event should be triggered`, () => {
  const onCardHover = jest.fn();

  const main = shallow(
      <SmallMovieCard
        film={movie}
        onCardHover={onCardHover}
      />
  );

  const movieCard = main.find(`.small-movie-card`);

  movieCard.props().onMouseEnter();

  expect(onCardHover.mock.calls.length).toBe(1);
});
