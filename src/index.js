import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.js";
import films from "./mocks/films.js";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      movie={movie}
      films={films}
    />,
    document.querySelector(`#root`)
);

