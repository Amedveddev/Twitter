import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( theme => ({
   wrapper: {
       [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
   }
}));