import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import MovieCard from "../movie-card/movie-card";

const Main = (props) => {

  const {movie, films, onHeadingClick, genre, onGenreClick} = props;

  return (
    <React.Fragment>


        <MovieCard
          title={movie.title}
          genre={movie.genre}
          year={movie.year}
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

  onHeadingClick: PropTypes.func,

  onGenreClick: PropTypes.func,

  genre: PropTypes.string
};

export default Main;

