import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( theme => ({
    main: {
        borderLeft: '2px solid #f2f2f2',
        borderRight: '2px solid #f2f2f2',
        backgroundColor: '#f2f2f2',
        mihHeight: '100vh'
    },
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
        }
    },
    createpost: {
        backgroundColor: 'white',
    },
    posttext: {},
}));