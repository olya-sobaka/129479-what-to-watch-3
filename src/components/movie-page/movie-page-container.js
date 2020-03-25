import {connect} from "react-redux";
import MoviePage from "./movie-page";

const mapStateToProps = (state) => {
  return {films: state.films};
};

const MoviePageContainer = connect(mapStateToProps)(MoviePage);

export default MoviePageContainer;
