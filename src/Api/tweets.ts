import makeRequest from './helpers';

function loadTweets() {
    const url = 'https://trycode.pw/c/DLTXP.json';
    
    return makeRequest(url);
}

export {loadTweets};