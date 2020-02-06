import React from "react";
import ReactDOM from "react-dom";
import Main from "../main/main.js";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title} = props;
  const {genre} = props;
  const {year} = props;

  return <Main
  title={title}
  genre={genre}
  year={year}
  />
};

export default App
