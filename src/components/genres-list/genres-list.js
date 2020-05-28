import React from "react";
import PropTypes from "prop-types";
import {capitalizeFirstLetter} from "../../utils";

const GenresList = (props) => {

  const {films, activeGenre, onGenreClick, resetShowMoreClicks} = props;

  const activeGenreClassNames = `catalog__genres-item catalog__genres-item--active`;
  const genreClassName = `catalog__genres-item`;

  const genres = films.map((film) => {
    return film.genre;
  });

  const distinctGenres = [...new Set(genres)];
  distinctGenres.unshift(`all genres`);

  const handleGenreClick = (newGenre) => {
    resetShowMoreClicks();
    onGenreClick(newGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {distinctGenres.map((distinctGenre, index) => {
        if (index > 8) {
          return null;
        }
        return (
          <li
            onClick={() => handleGenreClick(distinctGenre)}
            key={distinctGenre}
            className={distinctGenre === activeGenre ? activeGenreClassNames : genreClassName}>
            <a href="#" className="catalog__genres-link">{capitalizeFirstLetter(distinctGenre)}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {

  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired
      })
  ).isRequired,

  activeGenre: PropTypes.string.isRequired,

  onGenreClick: PropTypes.func.isRequired,

  resetShowMoreClicks: PropTypes.func.isRequired
};

export default GenresList;
