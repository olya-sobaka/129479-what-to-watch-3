import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.js";
import withActiveCard from "../../hocs/with-active-card/with-active-card.js";

const SmallMovieCardWrapped = withActiveCard(SmallMovieCard);

const MoviesList = (props) => {

  const {films, onHeadingClick, genre} = props;

  const filmsFiltered = films.filter((film) => film.genre === genre);
  const filmsByGenre = genre == `all genres` ? films : filmsFiltered;

  return (
    <div className="catalog__movies-list">
      {filmsByGenre.map((film) => {
        return (
          <SmallMovieCardWrapped
            onHeadingClick={onHeadingClick}
            key={film.id}
            film={film}
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
        posterSrc: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ).isRequired,

  onHeadingClick: PropTypes.func
};

export default MoviesList;
