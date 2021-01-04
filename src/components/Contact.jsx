import { Typography, makeStyles } from '@material-ui/core';
import { useLanguage } from '../contexts/language';
import { contact_es, contact_en } from '../constants/copies';
import { us_styles } from '../styles/us_styles';
import {contact_styles} from '../styles/contact_styles';


const useUsStyles = makeStyles(us_styles);
const useContactStyles = makeStyles(contact_styles);

const Contact = () =>{
    const currentLanguage = useLanguage();
    const usClasses = useUsStyles();
    const contactClasses = useContactStyles();
    const classes = {...usClasses,...contactClasses};
    

    const {
        section_header,
        title} = currentLanguage === 'es' ? contact_es : contact_en;
    
    
        return(
        <>
            <div className={classes.mainContainer}>
                <div className={classes.leftSide}>
                    <div className={classes.sectionIdContainer}>
                        <Typography className={classes.sectionNumber} variant="h1">02</Typography>
                        <Typography className={classes.sectionHeader} variant="h5">{section_header}</Typography>
                    </div>
                    <Typography className={classes.title} variant="h3">{title}</Typography>
                    <div className={classes.parContainer}>
                        <div className={classes.yellowLine}></div>
                        
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <Typography variant="subtitle1">WHATSAPP</Typography>
                    <Typography variant="subtitle2">+52 55 6595 5458</Typography>
                    <Typography variant="subtitle1">MAIL</Typography>
                    <Typography variant="subtitle2">hola@exire.com</Typography>                 
                </div>
            </div>

        </>
    )
}

export default Contact;