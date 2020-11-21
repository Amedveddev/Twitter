import makeRequest from './helpers';

function loadActual() {
    const url = '/actual';

    //return makeRequest(url);
    return [
        {
          "id": "111",
          "name": "Москва",
          "count": "2262"
        },
    ];
}

export {loadActual};