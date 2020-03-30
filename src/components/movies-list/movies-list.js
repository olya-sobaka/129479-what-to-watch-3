import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.js";
import withActiveCard from "../../hocs/with-active-card/with-active-card.js";

const SmallMovieCardWrapped = withActiveCard(SmallMovieCard);

const MoviesList = (props) => {

  const {films, genre, onCardClick} = props;

  const filmsFiltered = films.filter((film) => film.genre === genre);
  const filmsByGenre = genre === `all genres` ? films : filmsFiltered;

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

  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ).isRequired,

  genre: PropTypes.string,

  onCardClick: PropTypes.func
};

export default MoviesList;
