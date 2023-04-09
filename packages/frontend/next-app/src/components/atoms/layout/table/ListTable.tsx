import { alpha, Box, styled } from '@mui/material';

export default styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    marginTop: '0.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #e0e0e0',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',

    '& > div:first-of-type': {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        fontWeight: 'bold',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        '& > div.bg': {
            backgroundColor: theme.palette.grey[200],
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
        },
    },

    '& > div.canceled': {
        color: theme.palette.error.main,
    },

    '& > div.center': {
        justifyContent: 'center',
    },

    '&.index': {
        '& > div >div:first-of-type': {
            flex: 1,
        },
        '& > div > div': {
            flex: 3,
        },
    },

    '& > div': {
        zIndex: 0,
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
            wordBreak: 'break-all',
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
        '& > div > div': {
            fontSize: '0.7rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
}));
