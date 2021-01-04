import { Box,Button, Typography, makeStyles } from '@material-ui/core';
import { footer_styles } from '../styles/footer_styles';
import { footer_es, footer_en } from '../constants/copies';
import { useLanguage } from '../contexts/language';

const useStyles = makeStyles(footer_styles);

const Footer = () => {

    const currentLanguage = useLanguage();
    const classes = useStyles();
    const {
        contactData,
        mainContainer,
        rightsColor
    } = classes;

    const {
        cta_privacy,
        cta_terms,
        rights } = currentLanguage === 'es' ? footer_es : footer_en;

    return (
        <>
            <Box bgcolor="secondary.main" color="secondary.contrastText" pt={5} pb={5} pl={5} pr={5}>
                <div className={mainContainer}>
                    <Typography variant="h2">EXIRE</Typography>
                    <div className={contactData}>
                        <Typography variant="subtitle1">WHATSAPP</Typography>
                        <Typography variant="subtitle2">+52 55 6595 5458</Typography>
                        <Typography variant="subtitle1">MAIL</Typography>
                        <Typography variant="subtitle2">hola@exire.com</Typography>
                    </div>
                </div>
            </Box>
            <Box bgcolor="secondary.contrastText" color="secondary.main" pt={1} pb={1} pl={5} pr={5}>
                <Typography className={rightsColor} display='inline'>{rights}</Typography>
                <Button>{cta_terms}</Button>
                <Button>{cta_privacy}</Button>

            </Box>
        </>
    )
}

export default Footer;