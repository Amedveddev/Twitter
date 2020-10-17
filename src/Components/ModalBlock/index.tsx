import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface Prop {
    open: boolean,
    handleClose: any,
    children: any,
    title: string
}

export default (props: Prop)=>{
    return (
        <Dialog fullWidth onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
            <DialogTitle>
            {props.title}
            <IconButton onClick={props.handleClose}>
                <CloseIcon />
            </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {props.children}
            </DialogContent>
      </Dialog>
    );
}