import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.js";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const movieTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      movie={movie}
      movieTitles={movieTitles}
    />,
    document.querySelector(`#root`)
);

