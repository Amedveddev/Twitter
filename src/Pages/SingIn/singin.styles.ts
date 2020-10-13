import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( theme => ({
   wrapper: {
       display: 'flex',
       height: '100vh',
       [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
   },
   info: {
       flex: '1',
       overflow: "hidden",
       position: 'relative',
       backgroundColor: theme.palette.primary.light,
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       '& ul': {
           position: 'relative',
           color: theme.palette.primary.contrastText,
           '& li:not(:last-child)': {
               marginBottom: '25px'
           },
           listStyle: 'none',
           '& li': {
               display: 'flex',
               alignItems: 'center'
           }
       },
       [theme.breakpoints.down('sm')]: {
        padding: 5
        }
   },
   twitterbg: {
        position: 'absolute',
        right: '-60vh',
        top: '-30vh',
   },   
   sing: {
       flex: '1',
       position: 'relative',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       [theme.breakpoints.down('sm')]: {
            order: -1,
            padding: 35
        }
   },
   singform: {
       position: 'absolute',
       left: 0,
       right: 0,
       top: 0,
       display: 'flex',
       justifyContent: 'center',
       '& form': {
           display: 'flex',
           '& button': {
               alignSelf: 'center'
           }
       },
       [theme.breakpoints.down('md')]: {
           display: 'none'
       }
   },
   singwrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "inherit"
   },
   singinfo: {
       maxWidth: 350,
   },
   typography: {
       fontWeight: 'bold',
       fontSize: '1.15rem'
   }
}));