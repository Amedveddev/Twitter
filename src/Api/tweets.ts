import makeRequest from './helpers';

function loadTweets() {
    const url = '/tweets';
    
    return makeRequest(url);
}

function serchTweet(id: string) {
    const url = `/tweets?id=${id}`;

    return makeRequest(url);
}

export {loadTweets,serchTweet};