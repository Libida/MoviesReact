import React, { Component} from "react";
import Movies from "../organisms/Movies/Movies";
import Header from "../organisms/Header/Header";
import data from "../../data";

export default class MoviesListing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: data.data || [],
            searchTerm: "",
            searchBy: "Title",
            sortBy: "Rating",
            hasError: false
        };

        this.handlerSearchTerm = this.handleSearchTerm.bind(this);
        this.handlerSearchBy = this.handleSearchBy.bind(this);
        this.handlerSortBy = this.handleSortBy.bind(this);
        this.handlerFullSearch = this.handleFullSearch.bind(this);
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
        // TODO: fetch for part 2
        // event.preventDefault();
        //
        // let data = {
        //     searchTerm: this.state.searchTerm,
        //     searchBy: this.state.searchBy,
        //     sortBy: this.state.sortBy
        // };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render(){
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return(
            <div>
                <Header movies={this.state.movies}
                        searchTerm={this.state.searchTerm} handleSearchTerm={this.handlerSearchTerm}
                        searchBy={this.state.searchBy} handleSearchBy={this.handlerSearchBy}
                        sortBy={this.state.sortBy} handleSortBy={this.handlerSortBy}
                        handleFullSearch={this.handlerFullSearch}/>

                <Movies movies={this.state.movies} />
            </div>
        )
    }
}