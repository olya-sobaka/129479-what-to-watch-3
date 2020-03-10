import {extend} from "./utils.js";
import films from "./mocks/films";

const initialState = {
  genre: `all`,
  films
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`
};


export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {genre: action.payload.genre});
  }
  return state;
};


