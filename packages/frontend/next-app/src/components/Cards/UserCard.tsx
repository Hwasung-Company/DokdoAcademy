import {Avatar, Box, Typography} from '@mui/material'

function UserCard(){
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: '4rem',
            alignItems: 'center',
            padding: '0 1rem',
            gap: '1rem',
        }}>
            <Avatar sx={{width: '3rem', height: '3rem'}} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant={'caption'} sx={{ fontWeight: 500 }}>화성컴퍼니</Typography>
                <Typography variant={'body1'} sx={{ fontWeight: 500 }}>이재원</Typography>
                <Typography variant={'caption'} sx={{ fontWeight: 500 }}>010-7246-3347</Typography>
            </Box>
        </Box>
    )
}

export default UserCard;
