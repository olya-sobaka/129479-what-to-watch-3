import {extend} from "./utils.js";
import films from "./mocks/films";

export const initialState = {
  genre: `all genres`,
  films,
  activeFilmId: null,
  activeTab: `overview`,
  currentFilm: {
    id: 1,
    genre: `documentary`
  }
};

export const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  SET_ACTIVE_TAB: `SET_ACTIVE_TAB`,
  SET_CURRENT_FILM: `SET_CURRENT_FILM`
};


export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {genre: action.payload.newGenre});

    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {activeFilmId: action.payload.newFilmId});

    case ActionType.SET_ACTIVE_TAB:
      return extend(state, {activeTab: action.payload.newTab});

    case ActionType.SET_CURRENT_FILM:
      return extend(state, {currentFilm: action.payload.newFilm});
  }
  return state;
};


