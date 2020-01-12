import {UPDATE_MOVIES, UPDATE_SEARCH_BY, UPDATE_SEARCH_TERM, UPDATE_SORT_BY, UPDATE_SORT_ORDER} from "../constants/actions";

const initialState = {
    movies: [],
    moviesAmount: 0
};

export const moviesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_MOVIES:
            return Object.assign({}, state, {
                movies: action.movies,
                moviesAmount: action.moviesAmount,
            });
        case UPDATE_SEARCH_TERM:
            return Object.assign({}, state, {
                searchTerm: action.searchTerm
            });
        case UPDATE_SEARCH_BY:
            return Object.assign({}, state, {
                searchBy: action.searchBy
            });
        case UPDATE_SORT_BY:
            return Object.assign({}, state, {
                sortBy: action.sortBy
            });
        case UPDATE_SORT_ORDER:
            return Object.assign({}, state, {
                sortOrder: action.sortOrder
            });
    }

    return state;
};