import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

export default function Panel({movies, sortBy, handleSortBy}) {
    return(
        <div className="row mt-5">
            <div className="col-12 col-sm-6">
                <h2 className="h5">Movies found: {movies.length}</h2>
            </div>
            <div className="col-12 col-sm-6">
                <ButtonGroup groupArray={[{text: "Release date"}, {text: "Rating"}]} incomeClasses="panel-sort-by"
                             id="sort-by" handler={handleSortBy} selectedValue={sortBy}/>
            </div>
        </div>
    );
}