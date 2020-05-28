import {connect} from "react-redux";
import MoviePage from "./movie-page";

const mapStateToProps = (state) => {

  const {films, currentFilm} = state;

  return {
    films,
    currentFilm
  };
};

const MoviePageContainer = connect(mapStateToProps)(MoviePage);

export default MoviePageContainer;
