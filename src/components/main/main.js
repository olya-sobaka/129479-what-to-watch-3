import React from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, year} = props;

  return (
    <React.Fragment>
      <h2 className="movie-card__title">{title}</h2>
      <span className="movie-card__genre">{genre}</span>
      <span className="movie-card__year">{year}</span>
    </React.Fragment>
  );

};

export default Main;

