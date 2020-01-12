import {UPDATE_MOVIE} from "../constants/actions";
import handleFetchErrors from "../utils/errors";
import {getMovieURL} from "../utils/urls";

function fetchMovie() {
    const movieURL = getMovieURL();

    return fetch(movieURL);
}

function showMovie(data) {
    return {
        type: UPDATE_MOVIE,
        movie: data
    }
}

export function updateMovie() {
    return function(dispatch) {
        return fetchMovie().then(handleFetchErrors)
            .then(response => response.json())
            .then(data => {
                dispatch(showMovie(data))
            })
            .catch(error => console.log(error));
    }
}