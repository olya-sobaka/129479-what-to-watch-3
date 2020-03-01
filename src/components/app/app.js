import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.js";

const App = (props) => {
  const {movie, films} = props;

  const handleHeadingClick = () => {};

  return (
    <Main
      movie={movie}
      films={films}
      onHeadingClick={handleHeadingClick}
    />
  );
};

App.propTypes = {

  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        posterSrc: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ).isRequired,

  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })
};

export default App;
