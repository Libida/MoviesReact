import React from "react";
import {AMOUNT_OF_ITEMS_PER_PAGE} from "../../../constants/strings";
import {useSelector} from "react-redux";
import {getMovies, getMoviesAmount} from "../../../accessors";

export default function Pagination() {
    const movies = useSelector(getMovies) || 0;
    const moviesAmount = useSelector(getMoviesAmount);
    const amountOfPages = moviesAmount/AMOUNT_OF_ITEMS_PER_PAGE;
    let paginationContent = [];
    const isWithPagination = (amountOfPages > 1);

    if (amountOfPages > 0) {
        if (isWithPagination) {
            for (let i = 0; i < (amountOfPages); i++) {
                paginationContent.push(<li className="page-item" key={`pagination-item-${i}`}><a className="page-link" href="#">{i + 1}</a></li>);
                if (i == 12 ) {
                    paginationContent.push(<li className="page-item" key={`pagination-item-${i+1}`}><a className="page-link" href="#">...</a></li>);
                    break;
                }
            }
        }
    }

    return (
        <div className="container">
            <nav>
                {isWithPagination && <p>Static, possibly will do someday for myself</p>}
                {isWithPagination && <ul className="pagination pagination-lg">
                    {paginationContent}
                </ul>}
            </nav>
        </div>
    );

}

