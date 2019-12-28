import React from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Panel from "../Panel/Panel";

export default function Search(props) {
    const {movies, searchTerm, handleSearchTerm, searchBy, handleSearchBy, sortBy, handleSortBy, handleFullSearch} = props;

    return(
        <div className="row">
            <div className="col-sm-12">
                <form onSubmit={handleFullSearch}>
                    <div className="row form-group">
                        <div className="col-12 col-lg-10 mb-2">
                            <Input incomeClasses="form-control-lg" text={searchTerm} handler={handleSearchTerm} id="search-term"/>
                        </div>
                        <div className="col-12 col-lg-2">
                            <Button text="Search" type="submit" incomeClasses="btn-primary btn-lg w-100" isDisabled={!searchTerm} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                                <ButtonGroup groupArray={[{text: "Title"}, {text: "Genres"}]}
                                             id="search-by" handler={handleSearchBy} selectedValue={searchBy} />
                        </div>
                    </div>

                    <Panel movies={movies} sortBy={sortBy} handleSortBy={handleSortBy}/>
                </form>
            </div>
        </div>
    );
}