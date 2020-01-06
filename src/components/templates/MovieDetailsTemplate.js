import React, { Component} from "react";
import MovieDetails from "../molecules/MovieDetails/MovieDetails";

export default class MovieDetailsTemplate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                "id": 278,
                "title": "The Shawshank Redemption",
                "tagline": "Fear can hold you prisoner. Hope can set you free.",
                "vote_average": 8.6,
                "vote_count": 9868,
                "release_date": "1994-09-23",
                "poster_path": "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
                "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
                "budget": 25000000,
                "revenue": 28341469,
                "genres": [
                    "Drama",
                    "Crime"
                ],
                "runtime": 142
            }
        };
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