import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import {
    RELEASE_DATE_TEXT,
    RATING_TEXT,
    RELEASE_DATE_VALUE,
    SORT_ORDER_VALUE,
    SORT_ORDER_PARAM_TEXT, SORT_BY_PARAM_TEXT
} from "../../../constants/strings";

export default function Panel({movies, moviesAmount, sortBy, handleSortBy}) {
    return(
        <div className="row mt-5 align-items-center">
            <div className="col-12 col-sm-6">
                <h2 className="h5 mb-0">Movies found: {moviesAmount}</h2>
            </div>
            <div className="col-12 col-sm-6">
                <input type="hidden" name={SORT_ORDER_PARAM_TEXT} value={SORT_ORDER_VALUE} />
                <ButtonGroup groupArray={[{text: RELEASE_DATE_TEXT, value: RELEASE_DATE_VALUE}, {text: RATING_TEXT}]} incomeClasses="panel-sort-by"
                             id={SORT_BY_PARAM_TEXT} handler={handleSortBy} selectedValue={sortBy}/>
            </div>
        </div>
    );
}
