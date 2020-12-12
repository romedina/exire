import { Typography, makeStyles } from '@material-ui/core';
import { useLanguage } from '../contexts/language';
import { us_es, us_en } from '../constants/copies';
import { us_styles } from '../styles/us_styles';
import Gallery from './Gallery';

const useStyles = makeStyles(us_styles);

const Us = () => {
    const currentLanguage = useLanguage();
    const classes = useStyles();

    const {
        section_header,
        title,
        description } = currentLanguage === 'es' ? us_es : us_en;

    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.leftSide}>
                    <div className={classes.sectionIdContainer}>
                        <Typography className={classes.sectionNumber} variant="h1">01</Typography>
                        <Typography className={classes.sectionHeader} variant="h5">{section_header}</Typography>
                    </div>
                    <Typography className={classes.title} variant="h3">{title}</Typography>
                    <div className={classes.parContainer}>
                        <div className={classes.yellowLine}></div>
                        <Typography className={classes.parragraph} variant="body2">{description}</Typography>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <Gallery/>
                </div>
            </div>

        </>
    )
}

export default Us;