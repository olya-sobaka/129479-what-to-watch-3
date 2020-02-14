import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.js";

const Main = (props) => {

  const {movie, films, onHeadingClick} = props;
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
          <div className="catalog__movies-list"></div>
        </section>
      </div>
      <MoviesList
        films={films}
        onHeadingClick={onHeadingClick}
      />
    </React.Fragment>
  );
};

Main.propTypes = {
  movieTitles: PropTypes.arrayOf(PropTypes.string.isRequired),
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  onHeadingClick: PropTypes.func
};

export default Main;

