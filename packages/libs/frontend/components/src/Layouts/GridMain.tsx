import {Box, styled} from '@mui/material'

const GridMain = styled(Box)(({theme})=>({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    width: '100%',
    maxHeight: 1200,
    height: '100vh',
    gap: theme.spacing(1),
}));

export default GridMain;
