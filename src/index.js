import "./style.scss";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import MoviesListingTemplate from "./components/templates/MoviesListingTemplate";
import MovieDetailsTemplate from "./components/templates/MovieDetailsTemplate";
import Modal from "./components/organisms/Modal/Modal";

ReactDOM.render(
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={MoviesListingTemplate} />
            <Route path="/film" component={MovieDetailsTemplate} />
        </Switch>
    </Router>
    , document.getElementById("root"));

ReactDOM.render(<Modal id="modal-errors" />, document.getElementById("modals"));