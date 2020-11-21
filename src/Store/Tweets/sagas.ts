import {takeEvery, put, call} from 'redux-saga/effects';
import { loadTweets, serchTweet } from '../../Api/tweets';
import { LOAD_FULL_TWEET, LOAD_TWEETS, putFullTweet, putTweets } from './actions';

function fetchData() {
    return loadTweets();
}

function fetchSearch(id: string) {
    return serchTweet(id);
}


function* workerLoadTweets() {
    try {
        const data = yield call(fetchData);
        yield put(putTweets(data.tweets)); 
    } catch (error) {
        throw new Error(error);
    }
}

function* workerLoadFullTweet(action: any) {
    try {
        const data = yield call(fetchSearch, action.payload); 
        yield put(putFullTweet(data[0]));
    } catch (error) {
        throw new Error(error);
    }
}

export default function* watchLoadTweets() {
    yield takeEvery(LOAD_TWEETS, workerLoadTweets);
    yield takeEvery(LOAD_FULL_TWEET, workerLoadFullTweet);
}