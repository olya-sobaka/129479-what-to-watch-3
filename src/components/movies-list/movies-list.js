import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.js";
import withActiveItem from "../../hocs/with-active-card/with-active-item.js";

const SmallMovieCardWrapped = withActiveItem(SmallMovieCard);

const MoviesList = (props) => {

  const {onCardClick, filmsByAllGenres} = props;

  return (
    <div className="catalog__movies-list">
      {filmsByAllGenres.map((film) => {
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

  filmsByAllGenres: PropTypes.arrayOf(
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
