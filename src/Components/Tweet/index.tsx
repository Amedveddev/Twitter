import React from 'react';

import styles from './tweet.style';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import IconButton from '@material-ui/core/IconButton';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

interface Props {
    user: {
        userName: string,
        profileName: string,
        userPhoto: string
    }
}

export default ({user}: Props): React.ReactElement=>{
    const classes = styles();

    return(
        <Paper className={classes.mainPaper} square elevation={0}>
            <Grid className={classes.wrapper} container>
                <Grid item md={1}>
                    <Avatar src={user.userPhoto} alt='user Photo' />
                </Grid>
                <Grid item md={11}>
                    <Typography style={{fontSize: '0.8rem'}}>
                        <b>{user.userName}</b>
                        <span style={{color: 'gray', marginLeft: 5}}>@{user.profileName} </span>
                    </Typography>
                    <Typography gutterBottom variant='body1'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda consequuntur aperiam qui repudiandae hic corporis obcaecati aliquam? Sint corporis nulla expedita, excepturi labore temporibus odit, quasi consequatur est natus quae.
                    </Typography>
                    <div className={classes.tweetNav}>
                        <IconButton color='primary'>
                            <CommentIcon style={{fontSize: '1.1rem'}} />
                            <span style={{fontSize: '1.1rem', marginLeft: 5}}>1</span>
                        </IconButton>
                        <IconButton color='primary'>
                            <RepeatIcon style={{fontSize: '1.1rem'}} />
                        </IconButton>
                        <IconButton color='primary'>
                            <FavoriteBorderIcon style={{fontSize: '1.1rem'}} />
                            <span style={{fontSize: '1.1rem', marginLeft: 5}}>1</span>
                        </IconButton>
                        <IconButton color='primary'>
                            <ShareOutlinedIcon style={{fontSize: '1.1rem'}} />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}