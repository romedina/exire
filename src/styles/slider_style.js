import background from '../assets/mainBackground.jpg';

const textShadow = '2px 2px 3px rgba(0,0,0,0.3)';


export const sliderStyles = {
    container: {
        backgroundColor: 'gray',
        height: '100vh',
        display: 'grid',
        overflow: 'hidden',
        gridTemplateColumns: '0.5fr 0.5fr 3fr 2fr',
        gridTemplateRows: '1fr 4fr 1fr',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover'
    },
    description: {
        color: 'white',
        textShadow: textShadow,
        paddingBottom: '30px',
    },
    subtitle: {
        fontWeight: 'bold',
        color: 'white',
        textShadow: textShadow
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        textShadow: textShadow
    },
    bullet: {
        gridColumn: '2 / 4',
        gridRow: '2 / 3',
    },
    social: {
        gridColumn: '2 / 3',
        gridRow: '3 / 4'
    }
}