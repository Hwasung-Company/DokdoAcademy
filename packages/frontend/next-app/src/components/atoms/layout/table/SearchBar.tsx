import { Box, TextField } from '@mui/material';

export const SearchBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',
            }}
        >
            <TextField size='small' />
        </Box>
    );
};
