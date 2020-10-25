import {takeEvery, put, call} from 'redux-saga/effects';
import { loadTweets } from '../../Api/tweets';
import { LOAD_TWEETS, putTweets } from './actions';

function fetchData() {
    return loadTweets();
}

function* workerLoadTweets() {
    const data = yield call(fetchData);
    yield put(putTweets(data)); 
}

export default function* watchLoadTweets() {
    yield takeEvery(LOAD_TWEETS, workerLoadTweets);
}