import {
    regularGray,
    lightGray,
    yellow
} from '../constants/colorSystem';


export const us_styles = {
    mainContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    leftSide: {
        width: '50%',
        '@media screen and (max-width: 800px) ': {
            width: '100%',
        }
    },
    rightSide: {
        width: '50%',
        '@media screen and (max-width: 800px) ': {
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
        fontSize: '5em',
        padding: '50px 0px',
        lineHeight: '1.3',
        '@media screen and (max-width: 800px) ': {
            fontSize: '3.5em'
        },
        '@media screen and (max-width: 400px) ': {
            fontSize: '2em'
        }
    },
    yellowLine: {
        backgroundColor: yellow,
        width: '30%',
        minWidth: 133,
        height: 10
    }

}