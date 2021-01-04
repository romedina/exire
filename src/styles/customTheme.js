import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, regularGray, lightGray } from '../constants/colorSystem';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: yellow,
            contrastText: regularGray
        },
        secondary: {
            main: lightGray,
            contrastText: regularGray
        }
    },
    typography: {
        fontFamily: [
            'acumin-pro',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontFamily: [
                'acumin-pro-condensed',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 800,
            fontSize: '12rem'
        },
        h3: {
            fontFamily: [
                'acumin-pro-condensed',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 200,
            fontSize: '6rem'
        },
        h5: {
            fontFamily: [
                'acumin-pro-condensed',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 800,
            fontSize: '1.4rem'
        },
        h6: {
            fontFamily: [
                'acumin-pro-condensed',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 700,
            fontSize: '2.5rem'
        },
        subtitle1: {
            fontFamily: [
                'acumin-pro-condensed',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 700,
            fontSize: '1.5rem'
        },
        subtitle2: {
            fontFamily: [
                'acumin-pro-condensed',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 200,
            fontSize: '1.5rem'
        }
    },
});