import React from 'react';

import styles from './sideBar.styles';

import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';

export default ()=>{
    const classes = styles();

    return(
        <div style={{position: 'relative'}}>
            <label style={{position: 'relative'}} htmlFor='searchText'>
                <input id='searchText' className={classes.searchInput} placeholder='Поиск в твиттере' type='text' />
                <SearchIcon className={classes.searchInputIcon} />
            </label>
            <Paper elevation={0} className={classes.actualNews}>
                <Typography style={{padding: 10, margin: 0, fontWeight: 'bold', borderBottom: '1px solid gray'}} component='h6' variant='h6'>Актуальные темы</Typography>
                <ul>
                    <li>
                        <b>Москва</b>
                        <Typography color='secondary'>Твитов: 1 150</Typography>
                    </li>
                    <li>
                        <b>Питер</b>
                        <Typography color='secondary'>Твитов: 5 150</Typography>
                    </li>
                    <li>
                        <b>Донецк</b>
                        <Typography color='secondary'>Твитов: 150 150</Typography>
                    </li>
                </ul>
            </Paper>
            <Paper elevation={0} className={classes.newFriends}>
                <Typography style={{padding: 10, margin: 0, fontWeight: 'bold', borderBottom: '1px solid gray'}} component='h6' variant='h6'>Кого почитать</Typography>
                <div className={classes.newFriend}>
                    <Avatar />
                    <Typography style={{marginLeft: 10, fontSize: 16}}>Name name <span style={{display: 'block', fontSize: 14,margin: 0, color: 'gray', padding: 0}}>@profileName</span></Typography>
                    <IconButton style={{marginLeft: 'auto'}} color="primary"><GroupAddIcon /></IconButton>
                </div>
            </Paper>
        </div>
    );
}