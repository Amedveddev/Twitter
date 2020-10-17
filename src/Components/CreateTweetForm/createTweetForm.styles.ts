import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( theme => ({
    root: {},
    maintext: {
        padding: 10,
        zIndex: 10,
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        borderBottom: '1px solid #f2f2f2',
        '& h1': {
            margin: 0,
            padding: 0,
            fontSize: '1.2rem',
            fontWeight: 'bold'
        },
    },
    postEnter:{
        display: 'flex'
    },
    createpost: {
        backgroundColor: 'white',
    },
    posttext: {
        padding: 15,
    },
    postavatar: {
        marginRight: 10,
    },
    textarea: {
        flex: 1,
        border: 'none',
        resize: 'none',
        padding: 10,
        outline: 'none',
        fontSize: 16
    },
    createPostNav: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 45,
        
    }
}));