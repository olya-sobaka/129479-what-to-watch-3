import React from "react";

import Main from "../main/main.js";

const App = (props) => {
  const {movie, movieNames} = props;

  // const movie = props.movie; // niet destrucured
  // const {movie} = props; // destructured

  return (
    <Main
      movie={movie}
      movieNames={movieNames}
    />
  );
};

export default App;
