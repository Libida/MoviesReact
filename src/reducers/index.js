import {combineReducers} from "redux";
import {movieReducer} from "./movie";
import {moviesReducer} from "./movies";

export const allReducers = combineReducers({
    moviesListing: moviesReducer,
    movieDetails: movieReducer,
});
