import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Tweet from '../../Components/Tweet';
import CreateTweetForm from '../../Components/CreateTweetForm';

import styles from './mainContent.styles';
import { loadTweets } from '../../Store/Tweets/actions';

import CircularProgress from '@material-ui/core/CircularProgress';


export default ()=>{
    const classes = styles();
    const tweetsState = useSelector((state: any) => state.LoadTweetsReducer.tweets);
    const loading = useSelector((state:any)=> state.LoadTweetsReducer.loading);
    const tweets = tweetsState.map( (tweet:any) =>{
        return  <Tweet key={tweet.id}
                    user={{
                        userName: tweet.userName,
                        profileName: tweet.profileName,
                        userPhoto: tweet.userPhoto,
                        text: tweet.text
                    }}
                />
    } );
    const dispatch = useDispatch();

    console.log('render');
    
    
    useEffect(()=>{
        dispatch(loadTweets());
    }, [dispatch]);

    return(
        <>
            <div className={classes.maintext}><h1>Home</h1></div>
            <div className={classes.createpost} style={{marginBottom: 20}}>
                <CreateTweetForm />
            </div>
            {
                loading ? tweets : <CircularProgress />
            }
            
        </>
    );
}