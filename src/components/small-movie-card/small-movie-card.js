import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.js";


const SmallMovieCard = (props) => {

  const {updateActiveItem, film, activeItem, onCardClick} = props;

  const {title: filmTitle, id, poster: filmPoster} = film;

  return (
    <article
      onMouseEnter={() => {
        updateActiveItem(id);
      }}
      onMouseOut={() => {
        updateActiveItem(null);
      }}
      onClick={() => {
        onCardClick(id);
      }}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {activeItem === id ? <VideoPlayer playOnHover={true} film={film} controls={false} muted={true} /> : <img src={filmPoster} alt={filmTitle} width="280" height="175" />}
      </div>
      <h3
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
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,

  updateActiveItem: PropTypes.func,
  onCardClick: PropTypes.func,

  activeItem: PropTypes.number
};

export default SmallMovieCard;
