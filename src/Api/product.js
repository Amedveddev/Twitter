import makeRequest from './helpers';

function all() {
    return makeRequest('products/all.php');
}

export {all};