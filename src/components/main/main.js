import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import MovieCard from "../movie-card/movie-card";

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


      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            films={films}
            activeGenre={genre}
            onGenreClick={onGenreClick}
          />
          <MoviesList
            films={films}
            genre={genre}
            onCardClick={onCardClick}
          />
        </section>
      </div>
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

