import {MOVIE_API_URL} from "../constants/strings";

export const getMoviesSearchURL = (state = {}) => {
    const queryParams = getMoviesSearchQuery(state);
    let url = `${MOVIE_API_URL}/movies?${queryParams}`;

    return url;
}

export const getMoviesSearchQuery = (state = {}) => `search=${state.searchTerm}&searchBy=${state.searchBy}&sortBy=${state.sortBy}`;

export const getSearchURLParams = (props = {}) => {
    const location = props.location || "";
    const path = location.pathname;
    const indexOfSlash = path.lastIndexOf("/");
    const queryParams = path.substring(indexOfSlash + 1);

    return new URLSearchParams(queryParams);
}