export const TWEET_CHANGE_TEXT = 'TWEET_CHANGE_TEXT';

export const setTweetText = (text: string) => {
    return {
        type: TWEET_CHANGE_TEXT,
        payload: text
    };
}