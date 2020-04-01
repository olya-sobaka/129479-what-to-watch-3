import {reducer, ActionType} from "./reducer.js";
import {initialState} from "./reducer";

it(`should return initial state if no additional parameters`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`should set given genre as active genre`, () => {
  expect(reducer({
    genre: `all genres`
  }, {
    type: ActionType.SET_ACTIVE_GENRE,
    payload: {newGenre: `documentary`}
  })).toEqual({
    genre: `documentary`
  });
});
