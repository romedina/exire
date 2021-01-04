import { makeStyles, Box, Typography,Button } from '@material-ui/core';
import { navbar_styles } from '../styles/navbar_styles';
import { useLanguage, useLanguageUpdate } from '../contexts/language';
import {slider_es,slider_en,navbar_en,navbar_es} from '../constants/copies';


const useStyles = makeStyles(navbar_styles);

const Navbar = () => {

    const classes = useStyles();
    const toggleLanguage = useLanguageUpdate();
    const currentLanguage = useLanguage();
    
    const {
        mainContainer,
        boxContainer
    } = classes;

    const handleLanguage = () => {
        toggleLanguage();
    }

    const copies_es = {...slider_es,...navbar_es};
    const copies_en = {...slider_en,...slider_es};

    const {

        lang_btn } = currentLanguage === 'es' ? copies_es : copies_en;

    return (
        <>
            <nav className={mainContainer}>
                <Box pt={1} pb={1} pl={5} pr={5} className={boxContainer}>
                    <Typography variant='h4'>EXIRE</Typography>
                    <div>
                        <Button variant='outlined' onClick={handleLanguage}>{lang_btn}</Button>
                    </div>
                    
                </Box>
            </nav>
        </>
    )
}

export default Navbar;