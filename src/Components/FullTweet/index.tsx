import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearFullTweet, loadFullTweet } from '../../Store/Tweets/actions';
import Tweet from '../Tweet';

export default ()=>{
    const params: any = useParams();
    const dispatch = useDispatch();
    const tweet = useSelector((state: any)=> state.LoadTweetsReducer.fullTweet);

    useEffect(()=>{
        dispatch(loadFullTweet(params.id));

        return () => {dispatch(clearFullTweet());}
    }, [dispatch, params.id]);

    return (
        <Tweet user={{
            userName: tweet.userName, 
            profileName: tweet.profileName, 
            text: tweet.text, 
            userPhoto: tweet.userPhoto, 
            id: tweet.id}} />
    );
}