import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.js";

class MoviesList extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(cardId) {
    const activeCard = cardId;

    this.setState(
        {activeCard}
    );
  }

  render() {
    const {films, onHeadingClick} = this.props;
    return (
      <React.Fragment>
        {films.map((film) => {
          return (
            <SmallMovieCard
              onHeadingClick={onHeadingClick}
              key={film.id}
              onCardHover={this.handleCardHover}
              film={film}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

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
