import {UPDATE_MOVIE} from "../../constants/actions";

const initialState = {
    movie: {
        "id": 17663
    }
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