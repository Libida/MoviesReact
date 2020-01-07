import "./style.scss";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import MoviesListingTemplate from "./components/templates/MoviesListingTemplate";
import MovieDetailsTemplate from "./components/templates/MovieDetailsTemplate";
import NotFoundTemplate from "./components/templates/NotFoundTemplate";
import Modal from "./components/organisms/Modal/Modal";

ReactDOM.render(
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={MoviesListingTemplate} />
            <Route path="/search" component={MoviesListingTemplate} />
            <Route path="/film" component={MovieDetailsTemplate} />
            <Route path="/404" component={NotFoundTemplate} />
            <Redirect to="/404" />
        </Switch>
    </Router>
    , document.getElementById("root"));

ReactDOM.render(<Modal id="modal-errors" />, document.getElementById("modals"));