export const TWEET_CHANGE_TEXT = 'TWEET_CHANGE_TEXT';
export const CREATE_TWEET = 'CREATE_TWEET';

export const setTweetText = (text: string) => {
    return {
        type: TWEET_CHANGE_TEXT,
        payload: text
    };
}

export const createTweet = (text: string) => {
    return {
        type: CREATE_TWEET,
        payload: text
    };
}