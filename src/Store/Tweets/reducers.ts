import {CHANGE_LOADING, PUT_TWEETS } from './actions';
import {Tweets} from './types';

const initialState: Tweets   = {
    tweets: [],
    loading: false
};

const LoadTweetsReducer = (state: Tweets = initialState, action: any) => {
    switch (action.type) {
        case PUT_TWEETS:
            return {...state, tweets: action.payload, loading: true}
        case CHANGE_LOADING:
            return {...state, loading: action.payload}
        default:
            return {...state};
    }

}

export default LoadTweetsReducer;