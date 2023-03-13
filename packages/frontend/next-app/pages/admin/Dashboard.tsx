import {Box, Paper} from '@mui/material'


function Dashboard(){
    return (
        <>
            <Paper
                elevation={1}
                sx={{
                display: 'flex',
                width: '100%',
                height: '5rem'
            }}>
                <Box sx={(theme)=>{
                    return {
                        backgroundImage: "url(/assets/images/Logo.svg)",
                        filter: 'invert(77%) sepia(61%) saturate(1469%) hue-rotate(201deg) brightness(101%) contrast(89%)',
                        width: '4rem',
                        height: '4rem',
                    }
                }} />
            </Paper>
        </>
    )
}

export default Dashboard
