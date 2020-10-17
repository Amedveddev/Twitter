import React, {useState} from 'react';

import styles from './mainNav.styles';

import ModalBlock from '../ModalBlock';
import TweetModal from '../CreateTweetForm';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreIcon from '@material-ui/icons/More';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import IconButton from '@material-ui/core/IconButton';

export default ()=>{
    const classes = styles();
    const [tweetVisible, setTweetVisible] = useState<boolean>(false);

    const openTweetModal = () =>{
        setTweetVisible(true);
    }

    const closeTweetModel = () =>{
        setTweetVisible(false);
    }

    
    return(
        <div className={classes.menu}>
            <ModalBlock open={tweetVisible} title='Создайте твит' handleClose={closeTweetModel}>
                <TweetModal/>
            </ModalBlock>
                    <TwitterIcon style={{fontSize: 45}} color='primary'/>
                    <ul>
                        <li>
                            <Button fullWidth style={{justifyContent: 'left'}}>
                                <HomeOutlinedIcon style={{fontSize: 35}} color='primary'/>
                                <Hidden smDown><span className={classes.menutext}>Главная</span></Hidden>
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth style={{justifyContent: 'left'}}>
                                <ExploreIcon style={{fontSize: 35}} color='primary'/>
                                <Hidden smDown><span className={classes.menutext}>Поиск</span></Hidden>
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth style={{justifyContent: 'left'}}>
                                <NotificationsNoneOutlinedIcon style={{fontSize: 35}} color='primary'/>
                                <Hidden smDown><span className={classes.menutext}>Уведомления</span></Hidden>
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth style={{justifyContent: 'left'}}>
                                <MailOutlineIcon style={{fontSize: 35}} color='primary'/>
                                <Hidden smDown><span className={classes.menutext}>Сообщения</span></Hidden>
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth style={{justifyContent: 'left'}}>
                                <BookmarkBorderIcon style={{fontSize: 35}} color='primary'/>
                                <Hidden smDown><span className={classes.menutext}>Закладки</span></Hidden>
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth style={{justifyContent: 'left'}}>
                                <ListAltIcon style={{fontSize: 35}} color='primary'/>
                                <Hidden smDown><span className={classes.menutext}>Списки</span></Hidden>
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth style={{justifyContent: 'left'}}>
                                <PersonOutlineOutlinedIcon style={{fontSize: 35}} color='primary'/>
                                <Hidden smDown><span className={classes.menutext}>Профиль</span></Hidden>
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth style={{justifyContent: 'left'}}>
                                <MoreIcon style={{fontSize: 35}} color='primary'/>
                                <Hidden smDown><span className={classes.menutext}>Еще</span></Hidden>
                            </Button>
                        </li>
                    </ul>
                    <Hidden smDown>
                        <Button
                        onClick={openTweetModal}
                        style={{marginTop: 15, paddingLeft: 55, paddingRight: 55}}
                        variant="contained" color="primary"> 
                        <span className={classes.tweettext}>Tweet</span>
                        </Button>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton onClick={openTweetModal}>
                            <CreateOutlinedIcon />
                        </IconButton>
                    </Hidden>
                </div>
    );
} 