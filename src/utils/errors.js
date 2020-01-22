export function handleFetchErrors(response) {
    if (response.statusText !== "OK") throw Error(response.status);
    return response;
}