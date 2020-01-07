import React, {Component, PureComponent} from "react";
import Movies from "../organisms/Movies/Movies";
import Search from "../molecules/Search/Search";
import handleFetchErrors from "../../utils/errors";
import {getMoviesSearchURL, getMoviesSearchQuery, getSearchURLParams} from "../../utils/urls";
import {getInitialPropsFromURL} from "../../utils/movie-props";
import {
    SEARCH_BY_PARAM_TEXT,
    SEARCH_TERM_PARAM_TEXT,
    SORT_BY_PARAM_TEXT,
    SORT_ORDER_PARAM_TEXT
} from "../../constants/strings";
import Pagination from "../molecules/Pagination/Pagination";

export default class MoviesListingTemplate extends Component {
    constructor(props) {
        super(props);
        const propsFromURL = getInitialPropsFromURL(this.props) || {};
        this.state = {
            movies: [],
            moviesAmount: 0,
            searchTerm: propsFromURL[SEARCH_TERM_PARAM_TEXT],
            searchBy: propsFromURL[SEARCH_BY_PARAM_TEXT],
            sortBy: propsFromURL[SORT_BY_PARAM_TEXT],
            sortOrder: propsFromURL[SORT_ORDER_PARAM_TEXT],
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
        }, () => this.makeRequest());
    }

    handleSortBy(event) {
        this.setState({
            sortBy: event.target.value
        }, () => this.makeRequest());
    }

    handleFullSearch(event) {
        event.preventDefault();
        this.makeRequest();
    }

    makeRequest() {
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
                <Pagination movies={this.state.movies} moviesAmount={this.state.moviesAmount}/>
            </>
        )
    }
}