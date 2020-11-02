import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { createTweet, setTweetText } from '../../Store/CreateTweet/actions';

import styles from './createTweetForm.styles';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

export default (props: any)=>{
    const text: string = useSelector( (state: any) => state.CreateTweetReducer.tweetText);
    const dispatch = useDispatch();
    const classes = styles();
    const textLimitCircle: number = Math.floor((text.length / 260) * 100);
    const symbolLeft: number = 260 - text.length;
    const circleColor: string = text.length === 260 ? 'red' : '';

    const handleTextArea = (e: any) => {
        e.stopPropagation();
        dispatch(setTweetText(e.currentTarget.value));
    }

    const addTweet = () => {
        dispatch(createTweet(text));
        dispatch(setTweetText(''));
    }

    return(
        <div className={classes.posttext}>
            <div className={classes.postEnter}>
                <Avatar className={classes.postavatar} alt="Remy Sharp"  />
                <TextareaAutosize 
                    onChange={handleTextArea}
                    className={classes.textarea}
                    aria-label="Textarea post"
                    placeholder='Что нового ?'
                    rowsMin={1}
                    rowsMax={6}
                    maxLength={260}
                    value={text}
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
                { text && <>
                    <span style={{marginRight: 20, width: 24, display: 'inline-block'}}>{symbolLeft}</span>
                    <CircularProgress variant='static' value={100} style={{position: 'absolute',zIndex: 2,top: '40%',
                        left: '22%',transform: 'translateY(-50%)',color: 'gray', width: '20px', height: 20}} />
                    <CircularProgress thickness={3.6} variant='static' value={textLimitCircle} style={{position: 'absolute',zIndex: 3,top: '40%',
                        left: '22%',transform: 'translateY(-50%) rotate(-90deg)', width: '20px', height: 20, color: circleColor  }} />
                    </>
                }
                <Button
                 disabled={text.length <= 0 ? true : false}
                 onClick={addTweet} 
                 style={{marginLeft: '10px'}} 
                 variant="contained" 
                 color="primary">Tweet</Button>
            </div>
        </div>
        </div>
    );
}