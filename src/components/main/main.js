import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import PageContent from "../page-content/page-content";

const Main = (props) => {

  const {films, genre, onGenreClick, onCardClick, activeFilmId} = props;

  let activeFilm = films[0];

  films.map((film) => {
    if (film.id === activeFilmId) {
      activeFilm = film;
    }
  });

  return (
    <React.Fragment>
      <MovieCard
        activeFilm={activeFilm}
      />
      <PageContent films={films} genre={genre} onCardClick={onCardClick} onGenreClick={onGenreClick}/>
    </React.Fragment>
  );
};

Main.propTypes = {

  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ).isRequired,

  onGenreClick: PropTypes.func,

  onCardClick: PropTypes.func,

  activeFilmId: PropTypes.number,

  genre: PropTypes.string
};

export default Main;

