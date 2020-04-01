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

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick: (newGenre) => dispatch({
      type: ActionType.SET_ACTIVE_GENRE,
      payload: {newGenre}
    }),
    onCardClick: (newFilmId) => dispatch({
      type: ActionType.SET_ACTIVE_FILM,
      payload: {newFilmId}
    })
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

