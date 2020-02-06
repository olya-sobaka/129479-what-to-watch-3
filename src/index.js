import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.js";

const Movie = {
  title: "The Grand Budapest Hotel",
  genre: "Drama",
  year: 2014
}

ReactDOM.render(
  <App
    title={Movie.title}
    genre={Movie.genre}
    year={Movie.year}
   />,
  document.querySelector(`#root`)
);

