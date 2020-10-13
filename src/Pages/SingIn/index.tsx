import React, {useState} from 'react';

import RegistrationDialog from '../../Components/RegistrationDialog';

import styles from './singin.styles';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default ()=>{
    const [openRegDialog, setOpenRegDialog] = useState(false);
    const classes = styles();

    const handleOpenRegDialog = () => {
        setOpenRegDialog(true);
    };

    return(
        <div className={classes.wrapper}>
            <RegistrationDialog open={openRegDialog} handleClose={setOpenRegDialog} /> 
            <div className={classes.info}>
                <TwitterIcon style={{fontSize: '160vh'}} color='primary' className={classes.twitterbg} />
                <ul>
                    <li>
                        <SearchIcon style={{marginRight: 10, fontSize: 35}}/>
                        <Box fontWeight='bold' fontSize='1.18rem' color={'inherit'}>Читайте о том, что вам интересно.</Box>
                    </li>
                    <li>
                        <PeopleOutlineIcon style={{marginRight: 10, fontSize: 35}}/>
                        <Box fontWeight='bold' fontSize='1.18rem' color={'inherit'}>Узнайте, о чем говорят в мире.</Box>
                    </li>
                    <li>
                        <ModeCommentOutlinedIcon style={{marginRight: 10, fontSize: 35}} />
                        <Box fontWeight='bold' fontSize='1.18rem' color={'inherit'}>Присоединяйтесь к общению.</Box>
                    </li>
                </ul>
            </div>
            <div className={classes.sing}>
                <div className={classes.singform}>
                <form>
                <TextField
                    id="filled-full-width"
                    variant="filled"
                    type="mail"
                    name="email"
                    label="Адрес электроной почты"
                    placeholder="asd@mail.ru"
                    fullWidth
                    style={{marginRight: 15}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="filled-full-s"
                    variant="filled"
                    helperText="Забыли пароль?"
                    type="password"
                    autoComplete='password'
                    name="password"
                    label="Пароль"
                    fullWidth
                    margin="normal"
                    style={{marginRight: 15}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button type='submit' variant="outlined" color="primary">Войти</Button>
                </form>
                </div>
                <div className={classes.singwrapper}>
                    <div className={classes.singinfo}>
                        <TwitterIcon style={{fontSize: 45}} color='primary'/>
                        <Box color='black' fontWeight='bold' fontSize='0.9rem'><h1>Узнайте, что происходит в мире прямо сейчас</h1></Box>
                        <Box style={{marginTop: 50, marginBottom: 10}} color='black' fontWeight='bold' fontSize='0.9rem'>Присоединяйтесь к Твиттеру прямо сейчас!</Box>
                        <Button onClick={handleOpenRegDialog} style={{marginBottom: 10}} fullWidth variant="contained" color="primary">Зарегистрироваться</Button>
                        <Button style={{marginBottom: 10}} fullWidth variant="outlined" color="primary">Войти</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}