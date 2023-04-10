import { Box, Typography } from '@mui/material';

export default function MainLogo({ sx }: { sx?: any }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                ...sx,
            }}
        >
            <Box
                sx={{
                    display: 'flex',

                    alignItems: 'center',
                }}
            >
                <Box
                    id={'logo'}
                    sx={(theme) => {
                        return {
                            backgroundImage: 'url(/assets/images/Logo.svg)',
                            filter:
                                theme.palette.mode === 'dark'
                                    ? ''
                                    : 'invert(1)',
                            width: '6rem',
                            height: '6rem',
                        };
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '1rem',
                    }}
                >
                    <Typography variant={'h4'} sx={{ fontWeight: 'bold' }}>
                        독도 아카데미
                    </Typography>
                    <Typography variant={'caption'} sx={{ fontWeight: 200 }}>
                        Dokdo Academy Education
                        <br />
                        Web Service
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
