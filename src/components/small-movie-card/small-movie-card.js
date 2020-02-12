import React from "react";
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {

  const {movieTitles, onHeadingClick} = props;

  return (
    <React.Fragment>
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
    </React.Fragment>

  );
};

export default SmallMovieCard;
