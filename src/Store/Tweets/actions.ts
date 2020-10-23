export const LOAD_TWEETS = 'LOAD_TWEETS';
export const PUT_TWEETS = 'PUT_TWEETS';
export const CHANGE_LOADING = 'CHANGE_LOADING';

export const loadTweets = () => {
    return {
        type: LOAD_TWEETS
    }
}

export const putTweets = (tweets: any) => {
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