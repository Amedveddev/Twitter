import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Tweet from '../../Components/Tweet';
import CreateTweetForm from '../../Components/CreateTweetForm';

import styles from './mainContent.styles';
import { loadTweets } from '../../Store/Tweets/actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Route } from 'react-router-dom';


export default (props: any)=>{
    const classes = styles();
    const tweetsState = useSelector((state: any) => state.LoadTweetsReducer.tweets);
    const loading = useSelector((state:any)=> state.LoadTweetsReducer.loading);
    const tweets = tweetsState.map( (tweet:any) =>{
        return  <Tweet key={tweet.id}
                    user={{
                        userName: tweet.userName,
                        profileName: tweet.profileName,
                        userPhoto: tweet.userPhoto,
                        text: tweet.text,
                        id: tweet.id
                    }}
                />
    } );
    const dispatch = useDispatch();

    console.log(props);
    
    
    useEffect(()=>{
        dispatch(loadTweets());
    }, [dispatch]);

    return(
        <>
            <div className={classes.maintext}><h1>Home</h1></div>
            <div className={classes.createpost} style={{marginBottom: 20}}>
                <Route exact path={["/home", "/home/search"]}>
                    <CreateTweetForm />
                </Route>
            </div>
            <Route path="/home" exact>
                {
                    loading ? tweets : <CircularProgress/>
                }
            </Route>
        </>
    );
}