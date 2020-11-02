import {ADD_TWEET, CHANGE_LOADING, CLEAR_FULL_TWEET, PUT_FULL_TWEET, PUT_TWEETS } from './actions';
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
        case ADD_TWEET:
            const tweets = [...state.tweets];
            tweets.unshift(action.payload);
            return {...state, tweets}
        default:
            return {...state};
    }
}

export default LoadTweetsReducer;