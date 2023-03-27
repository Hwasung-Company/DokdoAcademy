import { Box } from '@mui/material';
import { styled } from '@mui/system';

export default styled(Box)(({ theme }) => ({
    gridColumn: '3/4',
    margin: '1rem 1rem 1rem 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
}));
