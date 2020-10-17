import React from 'react';

import Tweet from '../../Components/Tweet';

import styles from './mainContent.styles';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';


export default ()=>{
    const classes = styles();

    return(
        <>
            <div className={classes.maintext}><h1>Home</h1></div>
            <div className={classes.createpost} style={{marginBottom: 20}}>
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
                    <Button style={{marginLeft: 'auto'}} variant="contained" color="primary">Tweet</Button>
                </div>
                </div>
            </div>
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
            <Tweet user={{userName: 'andrey', profileName:'asld', userPhoto:''}} />
        </>
    );
}