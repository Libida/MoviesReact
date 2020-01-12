import React from "react";
import MovieListingItem from "../../molecules/MovieListingItem/MovieListingItem";
import {useSelector} from "react-redux";

export default function Movies() {
    const movies = useSelector(state => state.moviesListing.movies) || [];
    const moviesAmount = useSelector(state => state.moviesListing.moviesAmount) || 0;
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