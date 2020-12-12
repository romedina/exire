import { makeStyles } from '@material-ui/core';
import { gallery_styles } from '../styles/gallery_styles';

const useStyles = makeStyles(gallery_styles);

const Gallery = () => {

    const { grayBackground,mainContainer } = useStyles();

    return (
        <>
            <div className={mainContainer}>
                <div className={grayBackground}></div>
            </div>

        </>
    )

}

export default Gallery;