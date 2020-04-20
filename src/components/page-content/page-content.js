import React from "react";
import PropTypes from "prop-types";
import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";

const PageContent = (props) => {

  const {films, genre, onGenreClick, onCardClick, moreLike, currentFilm} = props;

  const catalogClassNameGenres = `catalog`;
  const catalogClassNameMoreLike = `catalog catalog--like-this`;
  const currentGenre = moreLike ? currentFilm.genre : genre;

  const filmsFiltered = films.filter((film) => film.genre === currentGenre);
  let filmsByGenre = currentGenre === `all genres` ? films : filmsFiltered;

  if (moreLike) {
    filmsByGenre = filmsFiltered.filter((film) => film.id !== currentFilm.id);
    filmsByGenre = filmsByGenre.slice(0, 4);
  }

  if (!moreLike) {
    filmsByGenre = filmsByGenre.slice(0, 20);
  }

  return (
    <div className="page-content">
      <section className={moreLike ? catalogClassNameMoreLike : catalogClassNameGenres}>
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {genre && (
          <GenresList
            films={films}
            activeGenre={genre}
            onGenreClick={onGenreClick}
          />
        )}

        {moreLike && (
          <h2 className="catalog__title">More like this</h2>
        )}

        <MoviesList
          onCardClick={onCardClick}
          filmsByGenre={filmsByGenre}
        />

      </section>
    </div>
  );
};

PageContent.propTypes = {

  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string,
        id: PropTypes.number.isRequired,
        previewMp4: PropTypes.string,
        previewWebm: PropTypes.string,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number
      })
  ),

  genre: PropTypes.string,

  onGenreClick: PropTypes.func.isRequired,

  onCardClick: PropTypes.func.isRequired,

  moreLike: PropTypes.bool,

  currentFilm: PropTypes.shape({
    id: PropTypes.number,
    genre: PropTypes.string
  })
};

export default PageContent;
