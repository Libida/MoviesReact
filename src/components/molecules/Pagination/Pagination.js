import React from "react";
import {AMOUNT_OF_ITEMS_PER_PAGE} from "../../../constants/strings";
import {useSelector} from "react-redux";
import {getMovies, getMoviesAmount} from "../../../accessors";

export default function Pagination() {
    const movies = useSelector(getMovies) || 0;
    const moviesAmount = useSelector(getMoviesAmount);
    const amountOfPages = moviesAmount/AMOUNT_OF_ITEMS_PER_PAGE;
    let paginationContent = [];

    if (amountOfPages > 0) {
        if (moviesAmount) {
            // Should create as amountOfPages
            paginationContent = movies.map((movie, index) =>
                <li className="page-item" key={movie.id}><a className="page-link" href="#">{index+1}</a></li>
            );
        }
    }

    return (
        <div className="container">
            <nav>
                <p>Static, possibly will do someday for myself</p>
                <ul className="pagination pagination-lg">
                    {paginationContent}
                </ul>
            </nav>
        </div>
    );

}

