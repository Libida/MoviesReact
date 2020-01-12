import {UPDATE_MOVIE, UPDATE_MOVIES} from "../constants/actions";

const initialState = {
    movie: {}
};

export const movieReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_MOVIE:
            return Object.assign({}, state, {
                movie: action.movie
            });
    }

    return state;
};