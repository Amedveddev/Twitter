import makeRequest from './helpers';

function loadTweets() {
    const url = '/tweets';
    
    return makeRequest(url);
}

export {loadTweets};