import { Box, styled } from '@mui/material';

export default styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
}));
