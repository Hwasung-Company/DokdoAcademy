import {Avatar, Box, Typography} from '@mui/material'

function ScheduleCard(){
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: '4rem',
            alignItems: 'center',
            padding: '0 1rem',
            gap: '1rem',
        }}>
            <Box sx={(theme)=>({display:'flex', width: '3rem', height: '3rem', borderRadius:'50%', border: '1px solid'+theme.palette.primary.main, alignItems:'center',justifyContent:'center'})}>
                <Typography color={'primary'} variant={'h6'} sx={{ fontWeight: 700 }}>1</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography color={'primary.main'} variant={'body1'} sx={{ fontWeight: 700 }}>2023년 1기 아카데미</Typography>
                <Typography variant={'caption'} sx={{ fontWeight: 500 }}>2023-03-22 ~ 25</Typography>
            </Box>
        </Box>
    )
}

export default ScheduleCard;
