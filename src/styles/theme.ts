import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

export const theme = createTheme({
    // typography: {
    //     fontFamily: "'Roboto', sans-serif",
    // },
    palette: {
        primary: {
            main: '#2d2837',
        },
        secondary: {
            main: '#55cd96',
        },
        error: {
            main: red.A400,
        },
        common: {
            black: '#000000',
            white: '#ffffff',
        },
        grey: {
            200: '#A0A2A6',
        },
    },
});