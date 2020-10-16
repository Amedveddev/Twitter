import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( theme => ({
   wrapper: {
      padding: 15,
      borderBottom: '1px solid #f2f2f2'
   },
   tweetNav: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
   },
   mainPaper: {
      '&:hover': {
         backgroundColor: 'rgb(245, 248, 250)'
      }
   }
}));