import React, { Component} from "react";
import Image from "../../atoms/Image/Image";

export default function Movie(props) {
    const {movie} = props;
    const {title = "Unknown movie title", release_date = "", poster_path} = movie;

    return (
        <div className="card mb-4 shadow-sm movie">
            <Image src={poster_path} title={title} incomeClasses="movie-img card-img-top" incomeWrapClasses="movie-img-wrap" />
            <div className="card-body">
                <h3>{title}</h3>
                <time dateTime={release_date}>{release_date.substring(0, 4)}</time>
            </div>
        </div>
    )
}