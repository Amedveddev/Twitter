import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( theme => ({
    root: {},
    maintext: {
        padding: 10,
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
    createpost: {
        backgroundColor: 'white',
    },
    posttext: {
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    postavatar: {
        marginRight: 15,
        width: '56px!important',
        height: '56px!important'
    },
    textarea: {
        flex: 1,
        border: 'none',
        resize: 'none',
        padding: 10,
        '&:focus': {
            backgroundColor: '#f2f2f2',
            outline: 'none'
        }
    },
    createPostNav: {
        display: 'flex',
        padding: 10,
        flex: '1 1 100%',
        justifyContent: 'space-between',
        marginLeft: 48
    }
}));