import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import AppContainer from "./components/app/app-container";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MoviePageContainer from "./components/movie-page/movie-page-container";


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <AppContainer movie={movie} />
          </Route>
          <Route exact path="/movie-page">
            <MoviePageContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);

