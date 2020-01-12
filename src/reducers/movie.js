import {UPDATE_MOVIE} from "../constants/actions";

export const movieReducer = (state = "", action = {}) => {
    switch (action.type) {
        case UPDATE_MOVIE:
            return action.movie;
    }

    return state;
};
