import { navBackAlpha } from '../constants/colorSystem';

export const navbar_styles = {
    mainContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: navBackAlpha,
        zIndex: 99,
    },
    boxContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}