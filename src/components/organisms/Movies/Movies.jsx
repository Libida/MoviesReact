import React from "react";
import MovieListingItem from "../../molecules/MovieListingItem/MovieListingItem.jsx";
import {useSelector} from "react-redux";
import {getMovies, getMoviesAmount} from "../../../accessors";

export default function Movies(props) {
    const movies = useSelector(getMovies) || [];
    const moviesAmount = useSelector(getMoviesAmount);
    let moviesContent;

    if (moviesAmount) {
        moviesContent = movies.map(movie =>
            <div className="col-md-4 d-flex align-items-stretch" key={movie.id}>
                <MovieListingItem movie={movie} />
            </div>
        );
    }
    else {
        moviesContent = <div className="col-md-12">
            <h2>No films found</h2>
        </div>
    }

    return (
        <div className="container">
            <div className="row">
                {moviesContent}
            </div>
        </div>
    )
}