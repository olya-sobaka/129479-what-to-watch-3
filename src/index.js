import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import AppContainer from "./components/app/app-container";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MoviePageContainer from "./components/movie-page/movie-page-container";
import PlayPageContainer from "./components/play-page/play-page-container";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AppContainer/>
          </Route>
          <Route exact path="/movie-page">
            <MoviePageContainer/>
          </Route>
          <Route exact path="/play-page">
            <PlayPageContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);

