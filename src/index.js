import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.js";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App movie={ movie }/>,
    document.querySelector(`#root`)
);

