import React, {Component, useEffect, useState} from "react";
import Movies from "../organisms/Movies/Movies";
import Search from "../molecules/Search/Search";
import handleFetchErrors from "../../utils/errors";
import {getMoviesSearchURL, getMoviesSearchQuery, getSearchURLParams} from "../../utils/urls";
import {getInitialPropsFromURL} from "../../utils/movie-props";

export default class MoviesListingTemplate extends Component {
    constructor(props) {
        super(props);
        const propsFromURL = getInitialPropsFromURL(this.props) || {};
        this.state = {
            movies: [],
            moviesAmount: 0,
            searchTerm: propsFromURL.searchTerm,
            searchBy: propsFromURL.searchBy,
            sortBy: propsFromURL.sortBy,
            hasError: false
        };

        this.handlerSearchTerm = this.handleSearchTerm.bind(this);
        this.handlerSearchBy = this.handleSearchBy.bind(this);
        this.handlerSortBy = this.handleSortBy.bind(this);
        this.handlerFullSearch = this.handleFullSearch.bind(this);
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        const url = getMoviesSearchURL(this.state);
        fetch(url)
            .then(handleFetchErrors)
            .then(response => response.json())
            .then(data => {
                this.handleMoviesUpdate(data);
            })
            .catch(error => console.log(error));
    }

    handleMoviesUpdate(movies) {
        this.setState({
            movies: movies.data,
            moviesAmount: movies.total
        });
    }

    handleSearchTerm(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSearchBy(event) {
        this.setState({
            searchBy: event.target.value
        });
    }

    handleSortBy(event) {
        this.setState({
            sortBy: event.target.value
        });
    }

    handleFullSearch(event) {
        event.preventDefault();
        const queryParams = getMoviesSearchQuery(this.state);
        this.props.history.push(`/search/${queryParams}`);

        this.getMovies();
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return (
            <>
                <Search movies={this.state.movies}
                        moviesAmount={this.state.moviesAmount}
                        searchTerm={this.state.searchTerm} handleSearchTerm={this.handlerSearchTerm}
                        searchBy={this.state.searchBy} handleSearchBy={this.handlerSearchBy}
                        sortBy={this.state.sortBy} handleSortBy={this.handlerSortBy}
                        handleFullSearch={this.handlerFullSearch}/>

                <Movies movies={this.state.movies}/>
            </>
        )
    }
}