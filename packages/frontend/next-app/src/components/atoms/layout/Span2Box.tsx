import { Box, styled } from '@mui/material';

export default styled(Box)(({ theme }) => ({
    gridColumn: 'span 2',
    maxHeight: '100vh',
    overflowY: 'scroll',
}));
