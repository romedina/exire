import {
    regularGray,
    lightGray,
    yellow
} from '../constants/colorSystem';


export const us_styles = theme => ({
    mainContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100vh',
        paddingBottom: 100,
    },
    leftSide: {
        width: '48%',
        paddingLeft: '2%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    rightSide: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    parContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    parragraph: {
        color: regularGray,
        width: '60%',
        paddingLeft: '3em',
        paddingTop: '1.5em'
    },
    sectionHeader: {
        color: regularGray,
        textTransform: 'uppercase',
        position: 'absolute',
        top: '50%',
        left: '10%'
    },
    sectionIdContainer: {
        position: 'relative',
        height: '200px'
    },
    sectionNumber: {
        color: lightGray,
        fontWeight: 700,
        fontSize: '11em',
        position: 'absolute',
        top: 0
    },
    title: {
        color: regularGray,
        textTransform: 'uppercase',
        padding: '50px 60px',
        lineHeight: '1.3',
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        }
    },
    yellowLine: {
        backgroundColor: yellow,
        width: '30%',
        minWidth: 133,
        height: 10
    }

})