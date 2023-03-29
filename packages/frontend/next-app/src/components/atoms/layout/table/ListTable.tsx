import { alpha, Box, styled } from '@mui/material';

export default styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    marginTop: '0.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #e0e0e0',
    overflowY: 'scroll',

    '& > div:first-of-type': {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        fontWeight: 'bold',
    },

    '& > div.canceled': {
        color: theme.palette.error.main,
    },

    '& > div': {
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '3rem',
        alignItems: 'center',
        '& > div': {
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        '& > div:first-of-type': {
            flex: 2,
        },
        '& > div:nth-of-type(2)': {
            flexDirection: 'column',
        },
        '& > div.canceled': {
            flex: 5,
            fontSize: '0.7rem',
            justifyContent: 'space-between',
        },
        '& > div > span': {
            fontSize: '0.5rem',
            position: 'absolute',
            bottom: '0.1rem',
            color: theme.palette.grey[500],
        },
    },
}));
