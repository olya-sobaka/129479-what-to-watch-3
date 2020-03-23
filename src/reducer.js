import {extend} from "./utils.js";
import films from "./mocks/films";

const initialState = {
  genre: `all genres`,
  films
};

export const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`
};


export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {genre: action.payload.newGenre});
  }
  return state;
};


