import {UPDATE_MOVIE} from "../../constants/actions";
import {handleFetchErrors} from "../../utils/errors";
import {getMovieURL} from "../../utils/urls";
const axios = require("axios");

export function fetchMovie(id) {
    const movieURL = getMovieURL(id);

    return axios(movieURL);
}

export function showMovie(data) {
    return {
        type: UPDATE_MOVIE,
        movie: data
    }
}

export function updateMovie(id) {
    return function(dispatch) {
        return fetchMovie(id).then(handleFetchErrors)
            .then(function (response = {}) {
                dispatch(showMovie(response.data))
            })
            .catch(error => console.log(error));
    }
}