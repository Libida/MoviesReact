import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {fetchMovie, showMovie, updateMovie} from "./index";
import {UPDATE_MOVIE} from "../../constants/actions";
import {getMovieURL} from "../../utils/urls";
import mockMovie from "../../mocks/movie";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const testMovieId = mockMovie.id;

test("API service is working", () => {
    return fetchMovie(testMovieId).then(data => {
        expect(data.data.id).toBe(testMovieId);
    });
});

describe("actions", () => {
    it("should update a movie by ID", function () {
        const expectedAction = {
            type: UPDATE_MOVIE,
            movie: testMovieId
        };

        expect(showMovie(testMovieId)).toEqual(expectedAction);
    });
});

describe("async actions", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("creates UPDATE_MOVIE when fetching of a movie has been done", () => {
        const store = mockStore({ movie: {} });
        const mockURL = getMovieURL(testMovieId);
        const expectedActions = [
            { type: UPDATE_MOVIE, movie: mockMovie }
        ];

        fetchMock.getOnce(mockURL, {
            body: { movie: mockMovie  },
            headers: { "content-type": "application/json" }
        });

        return store.dispatch(updateMovie(testMovieId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    })
});
