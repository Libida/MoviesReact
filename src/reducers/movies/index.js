import {UPDATE_MOVIES, UPDATE_SEARCH_BY, UPDATE_SEARCH_TERM, UPDATE_SORT_BY, UPDATE_STATE_FROM_URL} from "../../constants/actions";
import {SEARCH_BY_DEFAULT_VALUE, SORT_BY_DEFAULT_VALUE} from "../../constants/strings";

const initialState = {
    movies: [],
    moviesAmount: 0,
    searchTerm: "",
    searchBy: SEARCH_BY_DEFAULT_VALUE,
    sortBy: SORT_BY_DEFAULT_VALUE,
    sortOrder: ""
};

export const moviesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_MOVIES:
            return Object.assign({}, state, {
                movies: action.payload.data,
                moviesAmount: action.payload.total,
            });
        case UPDATE_SEARCH_TERM:
            return Object.assign({}, state, {
                searchTerm: action.payload
            });
        case UPDATE_SEARCH_BY:
            return Object.assign({}, state, {
                searchBy: action.payload
            });
        case UPDATE_SORT_BY:
            return Object.assign({}, state, {
                sortBy: action.payload
            });
        case UPDATE_STATE_FROM_URL:
            return Object.assign({}, state, {
                searchTerm: action.payload.searchTerm,
                sortOrder: action.payload.sortOrder,
                sortBy: action.payload.sortBy,
                searchBy: action.payload.searchBy,
            });
    }

    return state;
};