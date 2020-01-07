import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import {RELEASE_DATE_TEXT, RATING_TEXT} from "../../../constants/strings";

export default function Panel({movies, moviesAmount, sortBy, handleSortBy}) {
    return(
        <div className="row mt-5 align-items-center">
            <div className="col-12 col-sm-6">
                <h2 className="h5 mb-0">Movies found: {moviesAmount}</h2>
            </div>
            <div className="col-12 col-sm-6">
                <ButtonGroup groupArray={[{text: RELEASE_DATE_TEXT}, {text: RATING_TEXT}]} incomeClasses="panel-sort-by"
                             id="sort-by" handler={handleSortBy} selectedValue={sortBy}/>
            </div>
        </div>
    );
}