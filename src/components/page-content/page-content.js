import React from "react";
import PropTypes from "prop-types";
import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import ShowMore from "../show-more/show-more";

class PageContent extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showMoreClicks: 1
    };
    this.onShowMoreClick = this.onShowMoreClick.bind(this);
  }

  onShowMoreClick() {
    const {showMoreClicks} = this.state;
    this.setState({showMoreClicks: showMoreClicks + 1});
  }

  render() {
    const {films, activeGenre, onCardClick, moreLike, currentFilm, onGenreClick} = this.props;
    const {showMoreClicks} = this.state;
    const catalogClassNameGenres = `catalog`;
    const catalogClassNameMoreLike = `catalog catalog--like-this`;
    const currentGenre = moreLike ? currentFilm.genre : activeGenre;
    let maxNumberOfFilms = 8 * showMoreClicks;

    const resetShowMoreClicks = () => {
      this.setState({showMoreClicks: 1});
    };

    const filmsFiltered = films.filter((film) => film.genre === currentGenre);
    let filmsByGenre = currentGenre === `all genres` ? films : filmsFiltered;
    let filmsShowing = filmsByGenre;


    if (moreLike) {
      maxNumberOfFilms = 4;
      filmsByGenre = filmsFiltered.filter((film) => film.id !== currentFilm.id);
      filmsShowing = filmsByGenre.slice(0, maxNumberOfFilms);
    }

    if (!moreLike) {
      filmsShowing = filmsShowing.slice(0, maxNumberOfFilms);
    }

    return (
      <div className="page-content">
        <section className={moreLike ? catalogClassNameMoreLike : catalogClassNameGenres}>
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {activeGenre && (
            <GenresList
              films={films}
              resetShowMoreClicks={resetShowMoreClicks}
              onGenreClick={onGenreClick}
              activeGenre={activeGenre}
            />
          )}

          {moreLike && (
            <h2 className="catalog__title">More like this</h2>
          )}

          <MoviesList
            onCardClick={onCardClick}
            filmsByAllGenres={filmsShowing}
          />

          {filmsByGenre.length > maxNumberOfFilms && !moreLike && <ShowMore onShowMoreClick={this.onShowMoreClick}/>}

        </section>
      </div>
    );
  }
}

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

  activeGenre: PropTypes.string,

  onGenreClick: PropTypes.func.isRequired,

  onCardClick: PropTypes.func.isRequired,

  moreLike: PropTypes.bool,

  currentFilm: PropTypes.shape({
    id: PropTypes.number,
    genre: PropTypes.string
  })
};

export default PageContent;
