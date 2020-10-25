import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './sideBar.styles';

import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import { loadActual } from '../../Store/Actual/actions';
import { Link } from 'react-router-dom';

export default ()=>{
    const classes = styles();
    const dispatch = useDispatch();
    const actualState = useSelector((state: any)=>state.LoadActualReducer.items);
    const actual = actualState.map( (actual: any)=>{
        return <li key={actual.id}>
            <Link style={{color: 'inherit'}} to={`/home/search?q=${actual.name}`}>
            <div>
            <b>{actual.name}</b>
            <Typography color='secondary'>Твитов: {actual.count}</Typography>
            </div>
            </Link>
            
        </li>
    } );

    useEffect(()=>{
        dispatch(loadActual());
    }, [dispatch]);

    return(
        <div style={{position: 'relative', minHeight: '100%'}}>
            <label style={{position: 'relative'}} htmlFor='searchText'>
                <input id='searchText' className={classes.searchInput} placeholder='Поиск в твиттере' type='text' />
                <SearchIcon className={classes.searchInputIcon} />
            </label>
            <div style={{position: 'sticky', top: 10}}>
            <Paper elevation={0} className={classes.actualNews}>
                <Typography style={{padding: 10, margin: 0, fontWeight: 'bold', borderBottom: '1px solid gray'}} component='h6' variant='h6'>Актуальные темы</Typography>
                <ul>
                    {actual}
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
        </div>
    );
}