import React from "react";
import "./MovieDetails.scss";
import {useSelector} from "react-redux";
import Image from "../../atoms/Image/Image.jsx";
import {NO_MOVIE_TITLE} from "../../../constants/strings";
import {getMovieGenresString} from "../../../utils/movie-props";
import MovieYear from "../../atoms/MovieYear/MovieYear.jsx";
import TextHighlightValue from "../../atoms/TextHighlightValue/TextHighlightValue.jsx";

export default function MovieDetails(props) {
    const movie = useSelector(state => state.movieDetails.movie) || {};
    const {title = NO_MOVIE_TITLE, poster_path, vote_average, overview, runtime = 0} = movie;

    return (
        <div className="row movie-details">
            <div className="col-12 col-sm-6">
                <Image src={poster_path} title={title} incomeClasses="movie-details__img" incomeWrapClasses="movie-details__img-wrap" />
            </div>
            <div className="col-12 col-sm-6">
                <h1 className="movie-details__heading">
                    <span className="movie-details__heading__text">
                        {title}
                    </span>
                    <span className="badge badge-pill badge-dark movie-details__rating">{vote_average}</span>
                </h1>
                <div className="movie-details__digits">
                    <TextHighlightValue className="movie-details__digits__year" value={<MovieYear movie={movie} />} afterValue="year"/>
                    <TextHighlightValue className="movie-details__digits__duration" value={runtime} afterValue="min"/>
                </div>
                <p>{getMovieGenresString(movie)}</p>
                <p className="movie-details__details">{overview}</p>
            </div>
        </div>
    );
}