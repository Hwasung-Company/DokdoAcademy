import { DirectionsBus } from '@mui/icons-material';
import { alpha, Box, Paper, Typography } from '@mui/material';
import { useModal } from 'next-app/src/context/ModalContext';
import { useEffect } from 'react';
import SelectBus from '../Modal/SelectBus';
import { useTempContext } from 'next-app/src/context/TempContext';
import { useRouter } from 'next/router';

export default function TourInformation() {
    const { openModal, closeModal, setModal } = useModal();
    const { selectGroup } = useTempContext();
    const router = useRouter();

    const handleModal = () => {
        setModal(<SelectBus />);
        openModal();
    };

    return (
        <Paper
            id='TourTitle'
            sx={(theme) => ({
                display: 'flex',
                width: '100%',
                height: '12rem',
                backgroundColor: alpha(theme.palette.primary.light, 0.1),
                borderRadius: '1rem',
                padding: '1rem',
                alignItems: 'start',
                gap: '1rem',
                boxShadow: 'none',
            })}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flex: 7,
                    height: '100%',
                }}
            >
                <Box
                    sx={(theme) => ({
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gridTemplateRows: '1fr 1fr',
                        alignItems: 'center',
                        height: '100%',
                        flexGrow: 1,
                        gap: '1rem',
                    })}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gridColumn: '1/2',
                            gridRow: '1/2',
                            borderRadius: '1rem',
                            backgroundColor: 'background.paper',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onClick={() => {
                            router.push('/manager');
                        }}
                    >
                        <Typography variant='h5' fontWeight={700}>
                            354기
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gridColumn: '2/4',
                            gridRow: '1/2',
                            borderRadius: '1rem',
                            backgroundColor: 'background.paper',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 1rem',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 7,
                                    height: '100%',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'start',
                                }}
                            >
                                <Typography variant='caption'>
                                    2023년 4월 12일
                                </Typography>
                                <Typography variant='caption'>
                                    2023년 4월 14일
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flex: 3,
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography variant='body2' fontWeight={'bold'}>
                                    2박 3일
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            gridColumn: '1/4',
                            gridRow: '2/3',
                            borderRadius: '1rem',
                            backgroundColor: 'background.paper',
                            height: '100%',
                            padding: '0 1rem',
                            alignItems: 'center',
                            gap: '1rem',
                        })}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <DirectionsBus
                                sx={{
                                    color: 'primary.main',
                                    fontSize: '2rem',
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <Typography variant='body1'>
                                {selectGroup.busCompany}
                            </Typography>
                            <Typography variant='body2' whiteSpace={'nowrap'}>
                                {selectGroup.busNumber}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <Typography variant='body1' fontWeight={700}>
                                {selectGroup.busDriverName}
                            </Typography>
                            <Typography variant='body1' whiteSpace={'nowrap'}>
                                {selectGroup.busDriverContact}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flex: 3, height: '100%' }}>
                <Box
                    className='mouse_hover'
                    onClick={handleModal}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        height: '100%',
                        backgroundColor: 'primary.main',
                        borderRadius: '1rem',
                        color: 'primary.contrastText',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        boxShadow: 5,
                    }}
                >
                    <Typography variant='h4' fontWeight={700}>
                        {selectGroup.name}
                    </Typography>
                    <Typography variant='h5' fontWeight={700}>
                        {selectGroup.participantsCount}명
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}
