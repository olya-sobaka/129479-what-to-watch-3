import React from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movie} = props;

  return (
    <React.Fragment>
      <h2 className="movie-card__title">
        {
          // eslint-disable-next-line react/prop-types
          movie.title
        }
      </h2>
      <span className="movie-card__genre">
        {
          // eslint-disable-next-line react/prop-types
          movie.genre
        }
      </span>
      <span className="movie-card__year">
        {
          // eslint-disable-next-line react/prop-types
          movie.year
        }
      </span>
    </React.Fragment>
  );

};

export default Main;

