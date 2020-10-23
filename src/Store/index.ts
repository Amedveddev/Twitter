import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import CreateTweetReducer from './CreateTweet/reducers';
import LoadTweetsReducer from './Tweets/reducers';
import watchLoadTweets from './Tweets/sagas';


const saga = createSagaMiddleWare();

const rootReducer = combineReducers({
    CreateTweetReducer,
    LoadTweetsReducer
});

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(watchLoadTweets);

export default store;