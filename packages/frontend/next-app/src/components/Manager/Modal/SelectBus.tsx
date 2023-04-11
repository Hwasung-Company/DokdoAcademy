import { DirectionsBus } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useModal } from 'next-app/src/context/ModalContext';
import MContainer from '../../atoms/modal/layout/MContainer';
import Title from '../../atoms/modal/text/Title';
import { useTempContext } from 'next-app/src/context/TempContext';

const BusButton = ({
    onClick,
    num,
    selected,
}: {
    onClick: () => void;
    num: number;
    selected: boolean;
}) => {
    return (
        <Box
            onClick={onClick}
            className='mouse_hover'
            sx={{
                width: '100%',
                height: '6rem',
                backgroundColor: selected ? 'primary.main' : 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '0.5rem',
                color: selected ? 'background.paper' : 'text.primary',
            }}
        >
            <DirectionsBus />
            <Typography variant='h5'>{num}호차</Typography>
        </Box>
    );
};

function SelectBus() {
    const { closeModal } = useModal();
    const { groups, setSelectBus, selectBus } = useTempContext();
    return (
        <MContainer>
            <Title text='호차 변경' />
            <Box sx={{ mt: '1rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <BusButton
                            onClick={() => setSelectBus('1호차')}
                            num={1}
                            selected={selectBus === '1호차'}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton
                            onClick={() => setSelectBus('2호차')}
                            num={2}
                            selected={selectBus === '2호차'}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton
                            onClick={() => setSelectBus('3호차')}
                            num={3}
                            selected={selectBus === '3호차'}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton
                            onClick={() => setSelectBus('4호차')}
                            num={4}
                            selected={selectBus === '4호차'}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton
                            onClick={() => setSelectBus('5호차')}
                            num={5}
                            selected={selectBus === '5호차'}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton
                            onClick={() => setSelectBus('6호차')}
                            num={6}
                            selected={selectBus === '6호차'}
                        />
                    </Grid>
                    {/* <Grid item xs={3}>
                        <BusButton num={7} />
                    </Grid>
                    <Grid item xs={3}>
                        <BusButton num={8} />
                    </Grid> */}
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    {/* <Button
                        onClick={closeModal}
                        variant='outlined'
                        sx={{ mt: '1rem' }}
                    >
                        취소
                    </Button> */}
                    <Button
                        onClick={closeModal}
                        variant='contained'
                        sx={{ mt: '1rem', ml: '1rem' }}
                    >
                        확인
                    </Button>
                </Box>
            </Box>
        </MContainer>
    );
}

export default SelectBus;
