import React from "react";
import PropTypes from "prop-types";
import {capitalizeFirstLetter} from "../../utils";

const GenresList = (props) => {

  const {films, activeGenre, onGenreClick} = props;
  const activeGenreClassNames = `catalog__genres-item catalog__genres-item--active`;
  const genreClassName = `catalog__genres-item`;

  const genres = films.map((film) => {
    return film.genre;
  });

  const distinctGenres = [...new Set(genres)];
  distinctGenres.unshift(`all genres`);

  const handleGenreClick = (newGenre) => {
    onGenreClick(newGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {distinctGenres.map((distinctGenre) => {
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

export default GenresList;
