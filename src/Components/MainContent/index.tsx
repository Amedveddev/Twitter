import React from 'react';

import Tweet from '../../Components/Tweet';
import CreateTweetForm from '../../Components/CreateTweetForm';

import styles from './mainContent.styles';


export default ()=>{
    const classes = styles();

    return(
        <>
            <div className={classes.maintext}><h1>Home</h1></div>
            <div className={classes.createpost} style={{marginBottom: 20}}>
                <CreateTweetForm />
            </div>
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
        </>
    );
}