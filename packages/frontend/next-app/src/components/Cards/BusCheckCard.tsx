import { Male } from '@mui/icons-material';
import { Box, Checkbox, Paper, Typography } from '@mui/material';

export default function BusCheckCard() {
    return (
        <Box
            component={Paper}
            sx={{
                height: '5rem',
                display: 'flex',
                boxShadow: 'none',
                borderRadius: '1rem',
                gridColumn: 'span 2',
                padding: '0 1rem',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    gap: '0.5rem',
                }}
            >
                <Box>
                    <Typography variant='subtitle2'>서울교육지원청</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Typography variant='h6'>황보재원</Typography>
                    <Male fontSize='small' />
                    <Typography variant='h6' ml='1rem'>
                        010-1234-1234
                    </Typography>
                </Box>
            </Box>
            <Checkbox />
        </Box>
    );
}
