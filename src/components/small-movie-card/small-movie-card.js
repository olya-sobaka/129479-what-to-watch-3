import React from "react";
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {

  const {onHeadingClick, onCardHover, film} = props;

  const {title: filmTitle, posterSrc: filmPoster, id} = film;

  return (
    <React.Fragment>
      <article
        onMouseEnter={() => {
          onCardHover(id);
        }}
        onMouseOut={() => {
          onCardHover(null);
        }}

        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image"
        >
          <img
            src={filmPoster}
            alt={filmTitle}
            width="280"
            height="175"
          />
        </div>
        <h3
          onClick={onHeadingClick}
          className="small-movie-card__title">
          <a className="small-movie-card__link" /* href="movie-page.html" */>
            {filmTitle}
          </a>
        </h3>
      </article>
    </React.Fragment>

  );
};

SmallMovieCard.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  onHeadingClick: PropTypes.func
};

export default SmallMovieCard;
