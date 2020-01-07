import {
    MOVIE_API_URL,
    SEARCH_BY_PARAM_TEXT,
    SEARCH_TERM_PARAM_TEXT,
    SORT_BY_PARAM_TEXT,
    SORT_ORDER_PARAM_TEXT, SORT_ORDER_VALUE
} from "../constants/strings";

export const getMoviesSearchURL = (state = {}) => {
    const queryParams = getMoviesSearchQuery(state);
    let url = `${MOVIE_API_URL}/movies?${queryParams}`;

    return url;
}

export const getMoviesSearchQuery = (state = {}) =>
    `${SEARCH_TERM_PARAM_TEXT}=${state.searchTerm}&${SEARCH_BY_PARAM_TEXT}=${state.searchBy}&${SORT_BY_PARAM_TEXT}=${state.sortBy}&${SORT_ORDER_PARAM_TEXT}=${SORT_ORDER_VALUE}`;

export const getSearchURLParams = (props = {}) => {
    const location = props.location || "";
    const path = location.pathname;
    const indexOfSlash = path.lastIndexOf("/");
    const queryParams = path.substring(indexOfSlash + 1);

    return new URLSearchParams(queryParams);
}