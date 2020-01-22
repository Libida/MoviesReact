import React from "react";
import {getMovieYear} from "../../../utils/movie-props";

export default function MovieYear(props) {
    const {movie = {}, className} = props;
    const {release_date = ""} = movie;

    return (
        <time dateTime={release_date} className={className}>{getMovieYear(movie)}</time>
    )
}