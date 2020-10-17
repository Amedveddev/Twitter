import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( theme => ({
   wrapper: {},
   searchInput: {
      width: '100%',
      backgroundColor: 'rgb(245, 248, 250)',
      border: 'none',
      outline: 'none',
      padding: 10,
      borderRadius: 20,
      paddingLeft: 30
   },
   searchInputIcon: {
      position: 'absolute',
      left: 8,
      top: -2,
      width: 18
   },
   actualNews: {
      marginTop: 10,
      backgroundColor: 'rgb(245, 248, 250)',
      borderRadius: 5,
      '& ul': {
         listStyle: 'none',
         margin: 0,
         padding: 0,
         '& li': {
            fontSize: 16,
            padding: 10,
            '&:not(:last-child)': {
               borderBottom: '1px solid gray'
            }
         }
      }
   },
   newFriends: {
      backgroundColor: 'rgb(245, 248, 250)',
      borderRadius: 5,
      marginTop: 10,
      minHeight: 10,
      width: '100%',
   },
   newFriend: {
      padding: 10,
      display: 'flex',
   }
}));