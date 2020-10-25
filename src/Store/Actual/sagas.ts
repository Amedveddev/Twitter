import {takeEvery, put, call} from 'redux-saga/effects';
import { loadActual } from '../../Api/actual';
import { LOAD_ACTUAL, putActual } from './actions';

function fetchData() {
    return loadActual();
}

function* workerLoadActual() {
    try {
        const data = yield call(fetchData);
        yield put(putActual(data)); 
    } catch (error) {
        throw new Error(error);
    }
}

export default function* watchLoadActual() {
    yield takeEvery(LOAD_ACTUAL, workerLoadActual);
}