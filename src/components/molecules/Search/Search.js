import React from "react";
import {connect, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Panel from "../Panel/Panel";
import {TITLE_TEXT, GENRE_TEXT, SEARCH_BY_PARAM_TEXT, SEARCH_TERM_PARAM_TEXT} from "../../../constants/strings";
import {getSearchTerm, getSearchBy, getMoviesListing} from "../../../accessors";
import * as searchActions from "../../../actions/movies";
import {getMoviesSearchQuery, updateMoviesListingFullSearchURL} from "../../../utils/urls";

function Search(props) {
    const searchTerm = useSelector(getSearchTerm);
    const searchBy = useSelector(getSearchBy);
    const moviesListing = useSelector(getMoviesListing);
    const {history} = props;
    // const searchTerm = props.searchTerm; // can't make it work (even if pass from parent)
    const { updateSearchTerm, updateSearchBy, makeFullSearch } = props.actions;

    const handleSearchTerm = (event) => {
        updateSearchTerm(event.target.value)
    };

    const handleSearchBy = (event) => {
        updateSearchBy(event.target.value, moviesListing, history);
    };

    const handleFullSearch = (event) => {
        event.preventDefault();
        makeFullSearch(moviesListing, history);
    };

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

                            <Panel history={history}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(searchActions, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Search);
