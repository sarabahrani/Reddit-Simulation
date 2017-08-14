export function fetchReddits() {
    return {
        type: 'FETCH_REDDITS',
    };
}
export function upVote(id) {
    return {
        type: 'UP_VOTE',
        id
    };

}
export function downVote(id) {
    return {
        type: 'DOWN_VOTE',
        id
    };

}