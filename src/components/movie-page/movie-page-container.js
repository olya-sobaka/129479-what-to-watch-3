import {connect} from "react-redux";
import MoviePage from "./movie-page";
import {ActionType} from "../../reducer";

const mapStateToProps = (state) => {

  const {films, activeTab, currentFilm} = state;

  return {
    films,
    activeTab,
    currentFilm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTabClick: (newTab) => dispatch({
      type: ActionType.SET_ACTIVE_TAB,
      payload: {newTab}
    })
  };
};

const MoviePageContainer = connect(mapStateToProps, mapDispatchToProps)(MoviePage);

export default MoviePageContainer;
