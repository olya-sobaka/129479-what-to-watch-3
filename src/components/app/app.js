import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.js";

const App = (props) => {
  const {films, genre, onGenreClick, onCardClick, activeFilmId} = props;

  return (
    <Main
      films={films}
      genre={genre}
      onGenreClick={onGenreClick}
      onCardClick={onCardClick}
      activeFilmId={activeFilmId}
    />
  );
};

App.propTypes = {

  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ).isRequired,
};

export default App;
