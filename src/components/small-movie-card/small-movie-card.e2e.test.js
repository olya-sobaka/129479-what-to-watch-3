import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.js";

const movie = {
  title: `Kiki's Delivery Service`,
  poster: `img/midnight-special.jpg`,
  id: 36
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`SmallMovieCard should be pressed`, () => {
  const onCardClick = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard film={movie} onCardClick={onCardClick}/>
  );

  const movieHeading = smallMovieCard.find(`.small-movie-card`);

  movieHeading.props().onClick();

  expect(onCardClick.mock.calls.length).toBe(1);
});


it(`SmallMovieCard onMouseOver event should be triggered`, () => {
  const onCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={movie}
        onCardHover={onCardHover}
      />
  );

  const movieCard = smallMovieCard.find(`.small-movie-card`);

  movieCard.props().onMouseEnter();

  expect(onCardHover.mock.calls.length).toBe(1);
});
