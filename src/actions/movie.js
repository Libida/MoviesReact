import {UPDATE_MOVIE} from "../constants/actions";
import {MOVIE_API_URL} from "../constants/strings";
import handleFetchErrors from "../utils/errors";

function fetchMovie() {
    const path = location.pathname;
    const movieId = path.substr(path.lastIndexOf("/") + 1);

    return fetch(`${MOVIE_API_URL}/movies/${movieId}`);
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