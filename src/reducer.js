import {extend} from "./utils.js";
import films from "./mocks/films";

const initialState = {
  genre: `all genres`,
  films,
  activeFilmId: null
};

export const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`
};


export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {genre: action.payload.newGenre});

    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {activeFilmId: action.payload.newFilmId});
  }
  return state;
};


