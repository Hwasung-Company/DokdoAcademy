import {Box, Paper} from '@mui/material'

type MContainerProps = {
    children: React.ReactNode;
}

const MContainer = ({ children }: MContainerProps) => {
    return (
        <Box
            component={Paper}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30rem',
            minHeight: '20rem',
            padding: '1rem',
            borderRadius: '1rem',
            boxShadow: '0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2)',
        }}>
            {children}
        </Box>
    )
}

export default MContainer;
