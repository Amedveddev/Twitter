import React from 'react';

import styles from './mainContent.styles';

export default ()=>{
    const classes = styles();

    return(
        <>
        <div className={classes.maintext}><h1>Home</h1></div>
            <div className={classes.createpost}>
                <div className={classes.posttext}>
                <img  />
            </div>
        </div>
        </>
    );
}