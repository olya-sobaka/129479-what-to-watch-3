import React from "react";
import PropTypes from 'prop-types';
import Main from "../main/main.js";

const App = (props) => {
  const {movie, movieNames} = props;

  // const movie = props.movie; // niet destrucured
  // const {movie} = props; // destructured

  const handleHeadingClick = () => {};

  return (
    <Main
      movie={movie}
      movieNames={movieNames}
      onHeadingClick={handleHeadingClick()}
    />
  );
};

App.propTypes = {
  movieNames: PropTypes.arrayOf(PropTypes.string.isRequired),
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })
};

export default App;
