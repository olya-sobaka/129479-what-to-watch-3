import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.js";

const Main = (props) => {

  const {movie, movieTitles, onHeadingClick} = props;
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
      <SmallMovieCard
        movieTitles={movieTitles}
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

