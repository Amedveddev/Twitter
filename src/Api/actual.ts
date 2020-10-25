import makeRequest from './helpers';

function loadActual() {
    const url = '/actual';

    return makeRequest(url);
}

export {loadActual};