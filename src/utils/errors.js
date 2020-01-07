export default function handleFetchErrors(response) {
    if (!response.ok) throw Error(response.status);
    return response;
}