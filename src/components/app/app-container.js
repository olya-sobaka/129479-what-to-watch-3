import {connect} from "react-redux";
import App from "./app";
import {ActionType} from "../../reducer";

const mapStateToProps = (state) => {

  const {genre, films} = state;

  return {
    genre,
    films
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick: (newGenre) => dispatch({
      type: ActionType.SET_ACTIVE_GENRE,
      payload: {newGenre}
    }),
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

