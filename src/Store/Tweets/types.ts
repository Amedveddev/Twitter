interface User {
    user: {
        userName: string,
        profileName: string,
        userPhoto: string,
        text: string
    }
}

export interface Tweets {
    tweets: User[],
    loading: boolean
}