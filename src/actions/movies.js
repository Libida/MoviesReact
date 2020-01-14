import {
    UPDATE_MOVIES,
    UPDATE_SEARCH_BY,
    UPDATE_SEARCH_TERM,
    UPDATE_SORT_BY,
    UPDATE_STATE_FROM_URL,
} from "../constants/actions";
import {
    SEARCH_BY_PARAM_TEXT,
    SEARCH_TERM_PARAM_TEXT,
    SORT_BY_PARAM_TEXT,
    SORT_ORDER_PARAM_TEXT
} from "../constants/strings";
import handleFetchErrors from "../utils/errors";
import {getMoviesSearchQuery, getMoviesSearchURL, updateMoviesListingFullSearchURL} from "../utils/urls";
import {getInitialPropsFromURL} from "../utils/movie-props";

function fetchMovies(state) {
    const url = getMoviesSearchURL(state);
    return fetch(url);
}

function updateMoviesByURL(state) {
    return fetchMovies(state).then(handleFetchErrors)
        .then(handleFetchErrors)
        .then(response => response.json())
        .catch(error => console.log(error));
}

function getInitialDataFromURL() {
    const propsFromURL = getInitialPropsFromURL() || {};

    return {
        searchTerm: propsFromURL[SEARCH_TERM_PARAM_TEXT],
        searchBy: propsFromURL[SEARCH_BY_PARAM_TEXT],
        sortBy: propsFromURL[SORT_BY_PARAM_TEXT],
        sortOrder: propsFromURL[SORT_ORDER_PARAM_TEXT],
    }
}

function updateStateFromURL(state) {
    return {
        type: UPDATE_STATE_FROM_URL,
        payload: state
    }
}

export function updateFromURL() {
    const state = getInitialDataFromURL();
    return function(dispatch) {
        return updateMoviesByURL(state).then(data => {
            dispatch(showMovies(data));
            dispatch(updateStateFromURL(state));
        });
    }
}

export function updateMovies() {
    return function(dispatch) {
        return updateMoviesByURL().then(data => {
            dispatch(showMovies(data))
        });
    }
}

function showMovies(data) {
    return {
        type: UPDATE_MOVIES,
        payload: data
    }
}

export function updateSearchTerm(searchTerm) {
    return {
        type: UPDATE_SEARCH_TERM,
        payload: searchTerm
    }
}

export function updateSortBy(sortBy) {
    return {
        type: UPDATE_SORT_BY,
        payload: sortBy
    }
}

export function updateSearchBy(searchBy) {
    return {
        type: UPDATE_SEARCH_BY,
        payload: searchBy
    }
}

export function makeFullSearch(state, history) {
    return function(dispatch) {
        return updateMoviesByURL(state).then(data => {
            dispatch(showMovies(data));

            if (history) {
                updateMoviesListingFullSearchURL(state, history);
            }
        });
    }
}