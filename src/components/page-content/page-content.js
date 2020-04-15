import React from 'react';
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
  };

  if (!moreLike) {
    filmsByGenre = filmsByGenre.slice(0, 20);
  };

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

export default PageContent;
