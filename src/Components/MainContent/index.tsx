import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Tweet from '../../Components/Tweet';
import CreateTweetForm from '../../Components/CreateTweetForm';

import styles from './mainContent.styles';
import { loadTweets } from '../../Store/Tweets/actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Link, Route } from 'react-router-dom';
import FullTweet from '../FullTweet';


export default ()=>{
    const classes = styles();
    const tweetsState = useSelector((state: any) => state.LoadTweetsReducer.tweets);
    const loading = useSelector((state:any)=> state.LoadTweetsReducer.loading);
    const tweets = tweetsState.map( (tweet:any) =>{
        return ( 
        <Link key={tweet.id} style={{color: 'inherit', textDecoration: 'none'}} to={`/home/tweets/${tweet.id}`}>
        <Tweet 
            user={{
                userName: tweet.userName,
                profileName: tweet.profileName,
                userPhoto: tweet.userPhoto,
                text: tweet.text,
                id: tweet.id
            }}
        />
        </Link>);
    } );
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(loadTweets());
    }, [dispatch]);

    return(
        <>
            <Route path="/home" exact><div className={classes.maintext}><h1>Главная</h1></div></Route>
            <Route path="/home/tweets/:id" exact><div className={classes.maintext}><h1>Твит</h1></div></Route>
            <Route path="/home/search" exact><div className={classes.maintext}><h1>Твитнуть</h1></div></Route>
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
            <Route path="/home/tweets/:id">
                <FullTweet />
            </Route>
        </>
    );
}