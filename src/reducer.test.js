import {reducer, ActionCreator, ActionType} from "./reducer.js";
import films from "./mocks/films";

const movies = [
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

it(`should return initial state if no additional parameters`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `all genres`,
    films,
    activeFilmId: null
  });
});

it(`should set given genre as active genre`, () => {
  expect(reducer({
    genre: `all genres`,
    films
  }, {
    type: ActionType.SET_ACTIVE_GENRE,
    payload: {newGenre: `documentary`}
  })).toEqual({
    genre: `documentary`,
    films
  });
});
