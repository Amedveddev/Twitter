import makeRequest from './helpers';

function loadTweets() {
    const url = '/tweets';
    
    return makeRequest(url);
}

function serchTweet(id: string) {
    const url = `/tweets?id=${id}`;

    return makeRequest(url);
}

function createTweet(text: string) {
    const url = `/tweets`;

    const obj = {
        userName: 'test',
        profileName: 'test_test',
        userPhoto: '',
        text
    };

    return makeRequest(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
}

export {loadTweets,serchTweet,createTweet};

