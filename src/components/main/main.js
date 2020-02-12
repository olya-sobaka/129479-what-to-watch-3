import React from "react";
import PropTypes from 'prop-types';

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
          <div className="catalog__movies-list">
            {movieTitles.map((movieTitle) => {
              return (
                <article key={movieTitle} className="small-movie-card catalog__movies-card">
                  <div className="small-movie-card__image">
                    <img
                      src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                      alt={movieTitle}
                      width="280"
                      height="175"
                    />
                  </div>
                  <h3 onClick={onHeadingClick} className="small-movie-card__title">
                    <a className="small-movie-card__link" /* href="movie-page.html" */>
                      {movieTitle}
                    </a>
                  </h3>
                </article>
              );
            })}
          </div>
        </section>
      </div>
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

