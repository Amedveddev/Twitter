import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  open: boolean,
  handleClose: React.Dispatch<React.SetStateAction<boolean>> 
}

export default function FormDialog(props: Props) {
  function handleClose() {
    props.handleClose(false);
  }

  return (
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Войти</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
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
                <Button style={{marginBottom: 10}} fullWidth type='submit' variant="outlined" color="primary">Войти</Button>
                </form>
        </DialogContent>
      </Dialog>
  );
}