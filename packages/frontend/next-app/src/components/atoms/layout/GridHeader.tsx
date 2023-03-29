import { Box, styled } from '@mui/material';

export default styled(Box)(({ theme }) => ({
    gridColumn: '1/13',
    gridRow: '1/3',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));
