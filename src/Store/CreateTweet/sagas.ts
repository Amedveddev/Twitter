import { takeLatest, call } from "redux-saga/effects";
import { createTweet } from "../../Api/tweets";
import { CREATE_TWEET } from "./actions";

function fetchData(text: string) {
    return createTweet(text);
}

function* workerkAddTweet(action: any) {
    try {
        yield call(fetchData, action.payload);    
    } catch (error) {
        throw new Error(error);
    }
}

export default function* watchAddTweet() {
    yield takeLatest(CREATE_TWEET, workerkAddTweet);
}