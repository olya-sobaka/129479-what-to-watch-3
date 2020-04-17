import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.js";
import withActiveCard from "../../hocs/with-active-card/with-active-card.js";

const SmallMovieCardWrapped = withActiveCard(SmallMovieCard);

const MoviesList = (props) => {

  const {onCardClick, filmsByGenre} = props;

  return (
    <div className="catalog__movies-list">
      {filmsByGenre.map((film) => {
        return (
          <SmallMovieCardWrapped
            key={film.id}
            film={film}
            onCardClick={onCardClick}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {

  onCardClick: PropTypes.func,

  filmsByGenre: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string,
        id: PropTypes.number.isRequired,
        previewMp4: PropTypes.string,
        previewWebm: PropTypes.string,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number
      })
  )
};

export default MoviesList;
