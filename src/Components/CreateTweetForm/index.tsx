import React, {useState} from 'react';

import styles from './createTweetForm.styles';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

export default ()=>{
    const classes = styles();

    return(
        <div className={classes.posttext}>
            <div className={classes.postEnter}>
                <Avatar className={classes.postavatar} alt="Remy Sharp"  />
                <TextareaAutosize 
                    className={classes.textarea}
                    aria-label="Textarea post"
                    placeholder='Что нового ?'
                    rowsMin={1}
                    maxLength={260}
                    rowsMax={5}
                />
            </div>
            <div className={classes.createPostNav}>
            <label htmlFor="upload-photo">
                <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                />
                <IconButton color='primary'>
                    <ImageOutlinedIcon />
                </IconButton>
            </label>
            <IconButton color='primary'>
                    <EmojiEmotionsOutlinedIcon />
            </IconButton>
            <div style={{marginLeft: 'auto', position: 'relative'}}>
                <span style={{marginRight: 20}}>260</span>
                <CircularProgress variant='static' value={100} style={{position: 'absolute',zIndex: 2,top: '40%',
                    left: '22%',transform: 'translateY(-50%)',color: 'gray', width: '20px', height: 20}} />
                <CircularProgress thickness={3.6} variant='static' value={50} style={{position: 'absolute',zIndex: 3,top: '40%',
                    left: '22%',transform: 'translateY(-50%) rotate(-90deg)', width: '20px', height: 20}} />
                <Button style={{marginLeft: '10px'}} variant="contained" color="primary">Tweet</Button>
            </div>
        </div>
        </div>
    );
}