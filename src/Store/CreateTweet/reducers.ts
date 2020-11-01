import { TWEET_CHANGE_TEXT } from './actions';
import {TweetType} from './types';

const initialState: TweetType = {
    tweetText: '',
};

const CreateTweetReducer = (state: TweetType = initialState, action: any) => {
    switch (action.type) {
        case TWEET_CHANGE_TEXT:
            return {...state, tweetText: action.payload}
        default:
            return {...state};
    }

}

export default CreateTweetReducer;