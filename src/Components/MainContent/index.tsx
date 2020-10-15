import React from 'react';

import styles from './mainContent.styles';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

export default ()=>{
    const classes = styles();

    return(
        <>
            <div className={classes.maintext}><h1>Home</h1></div>
            <div className={classes.createpost}>
                <div className={classes.posttext}>
                    <Avatar className={classes.postavatar} alt="Remy Sharp"  />
                    <TextareaAutosize 
                        className={classes.textarea}
                        aria-label="Textarea post"
                        placeholder='Что нового ?'
                        rowsMin={2}
                        maxLength={235}
                        rowsMax={3}
                    />
                    <div className={classes.createPostNav}>
                    <label htmlFor="upload-photo">
                        <input
                            style={{ display: 'none' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                        />
                        <Fab color="primary" size="small" component="span" aria-label="add">
                            <ImageIcon />
                        </Fab>
                    </label>
                    <Button variant="contained" color="primary">Tweet</Button>
                </div>
                </div>
                
            </div>

        </>
    );
}