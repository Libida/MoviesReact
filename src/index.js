import "./style.scss";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import MoviesListingTemplate from "./components/templates/MoviesListingTemplate";
import MovieDetailsTemplate from "./components/templates/MovieDetailsTemplate";
import NotFoundTemplate from "./components/templates/NotFoundTemplate";
import Modal from "./components/organisms/Modal/Modal";
import {applyMiddleware, createStore} from "redux";
import {allReducers} from "./reducers";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={MoviesListingTemplate}/>
                <Route path="/search" component={MoviesListingTemplate}/>
                <Route path="/film" component={MovieDetailsTemplate}/>
                <Route path="/404" component={NotFoundTemplate}/>
                <Redirect to="/404"/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById("root"));

// ReactDOM.render(<Modal id="modal-errors"/>, document.getElementById("modals"));