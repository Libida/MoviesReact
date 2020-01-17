import {fetchMovie} from "./index";

test("API service is working", () => {
    const testMovieId = 497;
    return fetchMovie(testMovieId).then(data => {
        expect(data.data.id).toBe(testMovieId);
    });
});