import { Box, styled } from '@mui/material';

export default styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    borderRadius: '1rem',
}));
