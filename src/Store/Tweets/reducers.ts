import {CHANGE_LOADING, CLEAR_FULL_TWEET, PUT_FULL_TWEET, PUT_TWEETS } from './actions';
import {Tweets} from './types';

const initialState: Tweets = {
    tweets: [],
    loading: false,
    fullTweet: {userName: '', userPhoto: '', text: '', profileName: ''}
};

const LoadTweetsReducer = (state: Tweets = initialState, action: any) => {
    switch (action.type) {
        case PUT_TWEETS:
            return {...state, tweets: action.payload, loading: true}
        case CHANGE_LOADING:
            return {...state, loading: action.payload}
        case PUT_FULL_TWEET:
            return {...state, fullTweet: action.payload}
        case CLEAR_FULL_TWEET:
            return {...state, fullTweet: []}
        default:
            return {...state};
    }
}

export default LoadTweetsReducer;