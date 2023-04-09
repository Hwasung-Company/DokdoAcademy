import { Box } from '@mui/material';

export function Contents({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
    return (
        <Box
            gridRow={'2/13'}
            gridColumn={'4/13'}
            padding={'1rem'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'scroll',
            }}
            {...props}
        >
            {children}
        </Box>
    );
}
