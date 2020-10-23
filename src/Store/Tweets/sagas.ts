import {takeEvery, put, call} from 'redux-saga/effects';
import { changeLoading, LOAD_TWEETS, putTweets } from './actions';

function fetchData() {
    return fetch('https://trycode.pw/c/DLTXP.json')
    .then(res=>{
        return res.json();
    });
}

function* workerLoadTweets() {
    const data = yield call(fetchData);
    yield put(putTweets(data));
    yield put(changeLoading(true));
    
}

export default function* watchLoadTweets() {
    yield takeEvery(LOAD_TWEETS, workerLoadTweets);
}