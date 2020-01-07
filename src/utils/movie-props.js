import {getSearchURLParams} from "./urls";
import {
    SEARCH_BY_DEFAULT_VALUE,
    SEARCH_BY_PARAM_TEXT,
    SEARCH_TERM_PARAM_TEXT,
    SORT_BY_DEFAULT_VALUE,
    SORT_BY_PARAM_TEXT,
    SORT_ORDER_PARAM_TEXT,
    SORT_ORDER_VALUE
} from "../constants/strings";

export const getMovieYear = (movie = {}) => {
    const {release_date = ""} = movie;

    return release_date.substring(0, 4);
};

export const getMovieGenresString = (movie = {})  => {
    const {genres = []} = movie;

    return genres.toString();
};

export const getInitialPropsFromURL = (props) => {
    const queryParams = getSearchURLParams(props);

    return {
        [SEARCH_TERM_PARAM_TEXT]: queryParams.get(SEARCH_TERM_PARAM_TEXT) || "",
        [SEARCH_BY_PARAM_TEXT]: queryParams.get(SEARCH_BY_PARAM_TEXT) || SEARCH_BY_DEFAULT_VALUE,
        [SORT_BY_PARAM_TEXT]: queryParams.get(SORT_BY_PARAM_TEXT) || SORT_BY_DEFAULT_VALUE,
        [SORT_ORDER_PARAM_TEXT]: queryParams.get(SORT_ORDER_PARAM_TEXT) || SORT_ORDER_VALUE
    };
};