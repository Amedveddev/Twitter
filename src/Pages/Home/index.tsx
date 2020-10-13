import React from 'react';

import styles from './home.styles';

import Grid from '@material-ui/core/Grid';

export default ()=>{
    const classes = styles();

    return(
        <Grid container>
            <Grid xs={3} item>
                1
            </Grid>
            <Grid xs={5} item>
                2
            </Grid>
            <Grid xs={4} item>
                3
            </Grid>
        </Grid>
    );
}