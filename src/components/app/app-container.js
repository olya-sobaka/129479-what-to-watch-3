import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => {

  const {genre, films} = state;

  const filmByGenre = films.filter((film) => film.genre === genre);
  console.log('films', films);

  return {
    genre,
    films: genre === `all` ? films : filmByGenre
  };
};

const mapDispatchToProps = {};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

