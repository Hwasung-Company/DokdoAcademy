import { Box, Typography } from '@mui/material';

export default function ButtonWithIcon({
    icon,
    text,
    onClick,
    justifyContent = 'initial',
}: {
    icon: React.ReactNode;
    text: string;
    onClick: () => void;
    justifyContent?: string;
}) {
    return (
        <Box
            onClick={onClick}
            className='mouse_hover'
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                gap: '1rem',
                alignItems: 'center',
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                borderRadius: '1rem',
                padding: '0 1rem',
                justifyContent: justifyContent,
            }}
        >
            {icon}
            <Typography variant='h5' fontWeight={700}>
                {text}
            </Typography>
        </Box>
    );
}
