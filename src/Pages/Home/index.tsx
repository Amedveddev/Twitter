import React from 'react';

import MainNav from '../../Components/MainNav';
import MainContent from '../../Components/MainContent';
import SideBar from '../../Components/SideBar';

import styles from './home.styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

export default ()=>{
    const classes = styles();

    return(
        <div className={classes.wrapper}>
        <Grid container>
            <Grid sm={1} md={3} item>
                <MainNav />
            </Grid>
            <Grid className={classes.main} xs={9} sm={11} md={6} item>
                <MainContent />
            </Grid>
            <Hidden smDown>
            <Grid style={{paddingTop: 10, paddingLeft: 15, paddingRight: 15}} md={3} item>
                <SideBar />
            </Grid>
            </Hidden>
        </Grid>
        </div>
    );
}