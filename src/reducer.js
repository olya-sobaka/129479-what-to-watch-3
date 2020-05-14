import {extend} from "./utils.js";
import films from "./mocks/films";

export const initialState = {
  genre: `all genres`,
  films,
  activeFilmId: null,
  currentFilm: {
    id: 1,
    genre: `documentary`,
  },
  videoPlayerFilmId: 1
};

export const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  SET_CURRENT_FILM: `SET_CURRENT_FILM`,
  SET_VIDEO_PLAYER_FILM_ID: `SET_VIDEO_PLAYER_FILM_ID`
};


export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {genre: action.payload.newGenre});

    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {activeFilmId: action.payload.newFilmId});

    case ActionType.SET_CURRENT_FILM:
      return extend(state, {currentFilm: action.payload.newFilm});

    case ActionType.SET_VIDEO_PLAYER_FILM_ID:
      return extend(state, {videoPlayerFilmId: action.payload.videoPlayerFilmId});
  }
  return state;
};


