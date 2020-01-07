import {getSearchURLParams} from "./urls";
import {SEARCH_BY_DEFAULT_VALUE, SORT_BY_DEFAULT_VALUE} from "../constants/strings";

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
    const searchTerm = queryParams.get("search") || "";
    const searchBy = queryParams.get("searchBy") || SEARCH_BY_DEFAULT_VALUE;
    const sortBy = queryParams.get("sortBy") || SORT_BY_DEFAULT_VALUE;

    return {searchTerm, searchBy, sortBy}
};