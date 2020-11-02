import { FullTweet, Tweets } from "./types";

export const LOAD_TWEETS = 'LOAD_TWEETS';
export const PUT_TWEETS = 'PUT_TWEETS';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const LOAD_FULL_TWEET = 'LOAD_FULL_TWEET';
export const PUT_FULL_TWEET = 'PUT_FULL_TWEET';
export const CLEAR_FULL_TWEET = 'CLEAR_FULL_TWEET';
export const ADD_TWEET = 'ADD_TWEET';

export const loadTweets = () => {
    return {
        type: LOAD_TWEETS
    }
}

export const putTweets = (tweets: Tweets) => {
    return {
        type: PUT_TWEETS,
        payload: tweets
    }
}

export const changeLoading = (loading: boolean) => {
    return {
        type: CHANGE_LOADING,
        payload: loading
    }
}

export const loadFullTweet = (id: string) => {
    return {
        type: LOAD_FULL_TWEET,
        payload: id
    }
}

export const putFullTweet = (tweet: FullTweet) => {
    return {
        type: PUT_FULL_TWEET,
        payload: tweet
    }
}

export const clearFullTweet = () => {
    return {
        type: CLEAR_FULL_TWEET
    }
}

export const addTweet =  (tweet: FullTweet) => {
    return {
        type: ADD_TWEET,
        payload: tweet
    }
}