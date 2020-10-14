import React from 'react';

import MainNav from '../../Components/MainNav';
import MainContent from '../../Components/MainContent';

import styles from './home.styles';

import Grid from '@material-ui/core/Grid';

export default ()=>{
    const classes = styles();

    return(
        <div className={classes.wrapper}>
        <Grid container>
            <Grid md={2} item>
                <MainNav />
            </Grid>
            <Grid className={classes.main} md={6} item>
                <MainContent />
            </Grid>
            <Grid md={4} item>
                3
            </Grid>
        </Grid>
        </div>
    );
}