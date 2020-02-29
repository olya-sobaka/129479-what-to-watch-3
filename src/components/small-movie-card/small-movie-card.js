import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.js";


const SmallMovieCard = (props) => {

  const {onHeadingClick, onCardHover, film, activeCardId} = props;

  const {title: filmTitle, id, posterSrc: filmPoster} = film;

  return (
    <article
      onMouseEnter={() => {
        onCardHover(id);
      }}
      onMouseOut={() => {
        onCardHover(null);
      }}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {activeCardId === id ? <VideoPlayer film={film} /> : <img src={filmPoster} alt={filmTitle} width="280" height="175" />}
      </div>
      <h3
        onClick={onHeadingClick}
        className="small-movie-card__title">
        <a className="small-movie-card__link" /* href="movie-page.html" */>
          {filmTitle}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {

  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,

  onHeadingClick: PropTypes.func,

  onCardHover: PropTypes.func,

  activeCardId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
};

export default SmallMovieCard;
