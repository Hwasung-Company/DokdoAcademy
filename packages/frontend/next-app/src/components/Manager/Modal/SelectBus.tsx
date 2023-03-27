import { DirectionsBus } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useModal } from 'next-app/src/context/ModalContext';
import MContainer from '../../atoms/modal/layout/MContainer';
import Title from '../../atoms/modal/text/Title';

const BusButton = ({ num }: { num: number }) => {
    return (
        <Box
            className='mouse_hover'
            sx={{
                width: '100%',
                height: '6rem',
                backgroundColor: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '0.5rem',
                color: 'primary.contrastText',
            }}
        >
            <DirectionsBus />
            <Typography variant='h5'>{num}호차</Typography>
        </Box>
    );
};

function SelectBus() {
    const { closeModal } = useModal();
    return (
        <MContainer>
            <Title text='호차 변경' />
            <Box sx={{ mt: '1rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <BusButton num={1} />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton num={2} />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton num={3} />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton num={4} />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton num={5} />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton num={6} />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton num={7} />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton num={8} />
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        onClick={closeModal}
                        variant='outlined'
                        sx={{ mt: '1rem' }}
                    >
                        취소
                    </Button>
                    <Button variant='contained' sx={{ mt: '1rem', ml: '1rem' }}>
                        확인
                    </Button>
                </Box>
            </Box>
        </MContainer>
    );
}

export default SelectBus;
