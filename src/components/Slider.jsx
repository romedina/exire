import React from 'react';
import { slider_es, slider_en } from '../constants/copies';
import { useLanguage} from '../contexts/language';
import { Button, Typography, makeStyles } from '@material-ui/core';
import { sliderStyles } from '../styles/slider_style';

const useStyles = makeStyles(sliderStyles);


const Slider = () => {
    const currentLanguage = useLanguage();
    const classes = useStyles();


    const {
        subtitle,
        title,
        description,
        callToAction,
        lang_btn } = currentLanguage === 'es' ? slider_es : slider_en;

    return (
        <React.Fragment>
            <div className={classes.container}>
                
                <section className={classes.bullet}>
                    <Typography className={classes.subtitle} variant='h6'>{subtitle}</Typography>
                    <Typography className={classes.title} variant='h1'>{title}</Typography>
                    <div className={classes.ctaContainer}>
                        <Typography className={classes.description}>{description}</Typography>
                        <Button variant='contained' fullWidth={false} color='primary'>{callToAction}</Button>
                    </div>
                </section>
                <section className={classes.social}>
                    <a href='https://www.facebook.com/exireadventures' rel="noreferrer" target='_blank'>facebook</a>
                    <a href='https://www.facebook.com/exireadventures' rel="noreferrer" target='_blank'>whatsapp</a>
                    <a href='https://www.facebook.com/exireadventures' rel="noreferrer" target='_blank'>instagram</a>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Slider;

