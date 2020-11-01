import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { all } from 'redux-saga/effects';
import watchLoadActual from './Actual/sagas';

import CreateTweetReducer from './CreateTweet/reducers';
import LoadTweetsReducer from './Tweets/reducers';
import watchLoadTweets from './Tweets/sagas';
import LoadActualReducer from './Actual/reducers';
import watchAddTweet from './CreateTweet/sagas';


const saga = createSagaMiddleWare();

const rootReducer = combineReducers({
    CreateTweetReducer,
    LoadTweetsReducer,
    LoadActualReducer
});

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(function* () {
    yield all([
        watchLoadTweets(),
        watchLoadActual(),
        watchAddTweet()
    ])
  });

export default store;

