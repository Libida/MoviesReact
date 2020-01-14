import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import {
    RELEASE_DATE_TEXT,
    RATING_TEXT,
    RELEASE_DATE_VALUE,
    SORT_ORDER_VALUE,
    SORT_ORDER_PARAM_TEXT, SORT_BY_PARAM_TEXT, RATING_VALUE
} from "../../../constants/strings";
import {connect, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {getMoviesListing, getSortBy, getMoviesAmount} from "../../../accessors";
import * as panelActions from "../../../actions/movies";
import {updateMoviesListingFullSearchURL} from "../../../utils/urls";

function Panel(props) {
    const sortBy = useSelector(getSortBy);
    const moviesListing = useSelector(getMoviesListing);
    const moviesAmount = useSelector(getMoviesAmount);
    const {history} = props;
    const { updateSortBy, makeFullSearch } = props.actions;

    const handleSortBy = (event) => {
        updateSortBy(event.target.value, moviesListing, history);
        // makeFullSearch(moviesListing, history);sortBy, state, history
    };

    return(
        <div className="row mt-5 align-items-center">
            <div className="col-12 col-sm-6">
                <h2 className="h5 mb-0">Movies found: {moviesAmount}</h2>
            </div>
            <div className="col-12 col-sm-6">
                <input type="hidden" name={SORT_ORDER_PARAM_TEXT} value={SORT_ORDER_VALUE} />
                <ButtonGroup groupArray={[{text: RELEASE_DATE_TEXT, value: RELEASE_DATE_VALUE}, {text: RATING_TEXT, value: RATING_VALUE}]} incomeClasses="panel-sort-by"
                             id={SORT_BY_PARAM_TEXT} handler={handleSortBy} selectedValue={sortBy}/>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(panelActions, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Panel);

