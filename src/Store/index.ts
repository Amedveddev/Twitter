import {combineReducers, createStore} from 'redux';

import CreateTweetReducer from './CreateTweet/reducers';

const rootReducer = combineReducers({
    CreateTweetReducer 
});

const store = createStore(rootReducer);

export default store;