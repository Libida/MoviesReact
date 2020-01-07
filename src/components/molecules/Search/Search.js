import React from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Panel from "../Panel/Panel";
import {TITLE_TEXT, GENRE_TEXT, SEARCH_BY_PARAM_TEXT, SEARCH_TERM_PARAM_TEXT} from "../../../constants/strings";

export default function Search(props) {
    const {movies, moviesAmount, searchTerm, handleSearchTerm, searchBy, handleSearchBy, sortBy, handleSortBy, handleFullSearch} = props;

    return(
        <div className="jumbotron pt-0 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={handleFullSearch}>
                            <div className="row form-group">
                                <div className="col-12 col-lg-10">
                                    <h1 className="display-5">Find your movie</h1>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-12 col-lg-10 mb-2">
                                    <Input incomeClasses="form-control-lg" text={searchTerm} handler={handleSearchTerm} id={SEARCH_TERM_PARAM_TEXT}/>
                                </div>
                                <div className="col-12 col-lg-2">
                                    <Button text="Search" type="submit" incomeClasses="btn-primary btn-lg w-100" isDisabled={!searchTerm} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <ButtonGroup groupArray={[{text: TITLE_TEXT}, {text: GENRE_TEXT}]}
                                                 id={SEARCH_BY_PARAM_TEXT} handler={handleSearchBy} selectedValue={searchBy} />
                                </div>
                            </div>

                            <Panel movies={movies} moviesAmount={moviesAmount} sortBy={sortBy} handleSortBy={handleSortBy}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
