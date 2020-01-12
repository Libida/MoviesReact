import React, {PureComponent} from "react";
import Movies from "../organisms/Movies/Movies";
import Search from "../molecules/Search/Search";
import Pagination from "../molecules/Pagination/Pagination";
import {connect} from "react-redux";
import {updateMovies} from "../../actions/movies";

export class MoviesListingTemplate extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };

        // this.handlerSearchTerm = this.handleSearchTerm.bind(this);
        // this.handlerSearchBy = this.handleSearchBy.bind(this);
        // this.handlerSortBy = this.handleSortBy.bind(this);
        // this.handlerFullSearch = this.handleFullSearch.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(updateMovies());
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.dir("componentDidUpdate MoviesListingTemplate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount MoviesListingTemplate");
    }

    handleFullSearch(event) {
        // event.preventDefault();
        // this.makeRequest();
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return (
            <>
                <Search />
                <Movies />
                <Pagination />
            </>
        )
    }
}

export default connect((state) => {
    return {
        movies: state.movies,
        moviesAmount: state.moviesAmount,
        searchTerm: state.searchTerm,
        searchBy: state.searchBy,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
    }
})(MoviesListingTemplate);