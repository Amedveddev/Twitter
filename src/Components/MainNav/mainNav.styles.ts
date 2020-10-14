import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( theme => ({
    menu: {
        paddingRight: 10,
        marginLeft: 25,
        position: 'sticky',
        top: 0,
       '& ul': {
           marginTop: 10,
           margin: 0,
           padding: 0,
           listStyle: 'none',
           '& button': {
               fontSize: '1.1rem'
           },
           '& li:not(:last-child)': {
               marginBottom: 15
           }
       },
    },
    tweettext:{},
    menutext: {
       marginLeft: 15
    },
}));