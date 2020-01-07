import React, { Component} from "react";
import MovieDetails from "../molecules/MovieDetails/MovieDetails";
import handleFetchErrors from "../../utils/errors";
import {MOVIE_API_URL} from "../../constants/strings";

export default class MovieDetailsTemplate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        const path = location.pathname;
        const movieId = path.substr(path.lastIndexOf("/") + 1);
        fetch(`${MOVIE_API_URL}/movies/${movieId}`)
            .then(handleFetchErrors)
            .then(response => response.json())
            .then(data => {
                this.setState({ movie: data });
            })
            .catch(error => console.log(error));
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render(){
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return(
            <div className="container">
                <MovieDetails movie={this.state.movie} />

                {/*<Movies movies={this.state.movies} />*/}
            </div>
        )
    }
}