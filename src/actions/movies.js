import {UPDATE_MOVIE, UPDATE_MOVIES} from "../constants/actions";
import {
    MOVIE_API_URL,
    SEARCH_BY_PARAM_TEXT,
    SEARCH_TERM_PARAM_TEXT,
    SORT_BY_PARAM_TEXT,
    SORT_ORDER_PARAM_TEXT
} from "../constants/strings";
import handleFetchErrors from "../utils/errors";
import {getMoviesSearchURL} from "../utils/urls";
import {getInitialPropsFromURL} from "../utils/movie-props";

function fetchMovies(urlData) {
    const url = getMoviesSearchURL(urlData);

    return fetch(url);
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

function showMovies(data) {
    return {
        type: UPDATE_MOVIES,
        movies: data.data,
        moviesAmount: data.total
    }
}

export function updateMovies() {
    return function(dispatch) {
        return fetchMovies(getInitialDataFromURL()).then(handleFetchErrors)
            .then(handleFetchErrors)
            .then(response => response.json())
            .then(data => {
                dispatch(showMovies(data))
            })
            .catch(error => console.log(error));
    }
}