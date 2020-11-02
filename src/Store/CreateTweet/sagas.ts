import { takeLatest, call, put } from "redux-saga/effects";
import { createTweet } from "../../Api/tweets";
import { addTweet } from "../Tweets/actions";
import { CREATE_TWEET } from "./actions";

function fetchData(text: string) {
    return createTweet(text);
}

function* workerkAddTweet(action: any) {
    try {
        const data = yield call(fetchData, action.payload);   
        yield put(addTweet(data)); 
    } catch (error) {
        throw new Error(error);
    }
}

export default function* watchAddTweet() {
    yield takeLatest(CREATE_TWEET, workerkAddTweet);
}