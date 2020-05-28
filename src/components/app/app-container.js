import {connect} from "react-redux";
import App from "./app";
import {ActionType} from "../../reducer";

const mapStateToProps = (state) => {

  const {genre, films, activeFilmId} = state;

  return {
    genre,
    films,
    activeFilmId
  };
};

const onCardClickAction = (newFilmId) => {
  return {
    type: ActionType.SET_ACTIVE_FILM,
    payload: {newFilmId}
  };
};

const onGenreClickAction = (newGenre) => {
  return {
    type: ActionType.SET_ACTIVE_GENRE,
    payload: {newGenre}
  };
};

const mapDispatchToProps = {
  onGenreClick: onGenreClickAction,
  onCardClick: onCardClickAction,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

