import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";

const Main = (props) => {

  const {movie, films, onHeadingClick, genre, onGenreClick} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">
              {movie.title}
            </h2>
            <span className="movie-card__genre">
              {movie.genre}
            </span>
            <span className="movie-card__year">
              {movie.year}
            </span>
          </div>
        </div>
      </section>
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
            onHeadingClick={onHeadingClick}
            genre={genre}
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
        posterSrc: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ).isRequired,

  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),

  onHeadingClick: PropTypes.func
};

export default Main;

