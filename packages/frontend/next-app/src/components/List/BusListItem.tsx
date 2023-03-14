import {alpha, Box, Checkbox, Typography} from '@mui/material'

type BusListItemProps = {
    name: string,
    address: string,
    contact: string,
    phone: string,
    reservations: number,
}

function BusListItem(props: BusListItemProps){
    return (<Box sx={theme=>({
        gridRow: 'span 1',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        borderBottom: `1px solid ${theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2)}`,
    })}>
        <Box sx={{
            gridColumn: '1/2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Checkbox/>
        </Box>
        <Box sx={{ gridColumn: '2/4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant={'body2'} fontWeight={500}>{props.name}</Typography>
        </Box>
        <Box sx={{ gridColumn: '4/7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant={'caption'} fontWeight={500}>{props.address}</Typography>
        </Box>
        <Box sx={{ gridColumn: '7/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant={'body2'} fontWeight={500}>{props.contact}</Typography>
        </Box>
        <Box sx={{ gridColumn: '9/11', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant={'body2'} fontWeight={500}>{props.phone}</Typography>
        </Box>
        <Box sx={{ gridColumn: '11/13', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant={'body2'} fontWeight={500}>{props.reservations.toLocaleString()}건</Typography>
        </Box>
    </Box>)
}

export default BusListItem;
