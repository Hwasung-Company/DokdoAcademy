import { Female, Male } from '@mui/icons-material';
import { Box, Checkbox, Paper, Typography } from '@mui/material';

export default function BusCheckCard({
    name,
    company,
    sexuality,
    contact,
    onClick,
    checked,
}: any) {
    return (
        <Box
            onClick={onClick}
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
                backgroundColor: checked ? 'success.main' : 'background.paper',
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
                    <Typography variant='subtitle2'>{company}</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Typography variant='h6'>{name}</Typography>
                    {sexuality === '남' ? (
                        <Male fontSize='small' />
                    ) : (
                        <Female fontSize='small' />
                    )}
                    <Typography variant='h6' ml='1rem'>
                        {contact}
                    </Typography>
                </Box>
            </Box>
            <Checkbox checked={checked} />
        </Box>
    );
}
