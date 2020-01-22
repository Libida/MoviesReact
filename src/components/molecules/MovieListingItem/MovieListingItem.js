import React from "react";
import "./MovieListingItem.scss";
import Image from "../../atoms/Image/Image";
import {Link} from "react-router-dom";
import {NO_MOVIE_TITLE} from "../../../constants/strings";
import MovieYear from "../../atoms/MovieYear/MovieYear";

export default function MovieListingItem(props) {
    const {movie} = props;
    const {id, title = NO_MOVIE_TITLE, release_date = "", poster_path} = movie;

    return (
        <div className="card mb-4 shadow-sm movie-listing-item">
            <Link to={`/film/${id}`} className="movie-listing-item__link">
                <Image src={poster_path} title={title} incomeClasses="movie-listing-item__img card-img-top"
                       incomeWrapClasses="movie-listing-item__img-wrap"/>
                <div className="card-body">
                    <h3>{title}</h3>
                    <MovieYear movie={movie} />
                </div>
            </Link>
        </div>
    )
}