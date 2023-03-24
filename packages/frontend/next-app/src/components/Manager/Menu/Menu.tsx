import {
    ConfirmationNumber,
    DirectionsBus,
    LocalHotel,
    Restaurant
} from '@mui/icons-material';
import { alpha, Box, Typography } from '@mui/material';
import { useModal } from 'next-app/src/context/ModalContext';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import SelectBus from '../Modal/SelectBus';

export default function Menu() {
    const { openModal, closeModal, setModal } = useModal();
    const router = useRouter();
    useEffect(() => {
        setModal(<SelectBus />);
    }, []);
    return (
        <Box
            sx={{
                gridColumn: '3/4',
                margin: '1rem 1rem 1rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <Box
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
                        >
                            <Typography variant='h4' fontWeight={700}>
                                352기
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
                                    <Typography variant='body1'>
                                        2023년 3월 29일
                                    </Typography>
                                    <Typography variant='body1'>
                                        2023년 3월 31일
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
                                    <Typography
                                        variant='body1'
                                        fontWeight={'bold'}
                                    >
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
                                    두레고속관광
                                </Typography>
                                <Typography variant='body1'>
                                    경북 12바 1234
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
                                    이재원
                                </Typography>
                                <Typography variant='body1'>
                                    010-1234-1234
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flex: 3, height: '100%' }}>
                    <Box
                        className='mouse_hover'
                        onClick={openModal}
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
                            1호차
                        </Typography>
                        <Typography variant='h5' fontWeight={700}>
                            32명
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={(theme) => ({
                    display: 'grid',
                    width: '100%',
                    minHeight: '30rem',
                    backgroundColor: alpha(theme.palette.primary.light, 0.1),
                    borderRadius: '1rem',
                    padding: '1rem',
                    alignItems: 'start',
                    gap: '1rem',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                })}
            >
                <Box
                    className='mouse_hover'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                        height: '100%',
                        backgroundColor: 'primary.main',
                        borderRadius: '1rem',
                        padding: '1rem',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 5,
                        color: 'primary.contrastText',
                    }}
                >
                    <Box>
                        <DirectionsBus
                            sx={{
                                fontSize: '4rem',
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '2rem',
                            }}
                            fontWeight={700}
                        >
                            버스
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className='mouse_hover'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                        height: '100%',
                        backgroundColor: 'primary.dark',
                        borderRadius: '1rem',
                        padding: '1rem',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 5,
                        color: 'primary.contrastText',
                    }}
                >
                    <Box>
                        <Restaurant
                            sx={{
                                fontSize: '4rem',
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '2rem',
                            }}
                            fontWeight={700}
                        >
                            식사
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className='mouse_hover'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                        height: '100%',
                        backgroundColor: 'primary.light',
                        borderRadius: '1rem',
                        padding: '1rem',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 5,
                        color: 'primary.contrastText',
                    }}
                >
                    <Box>
                        <LocalHotel
                            sx={{
                                fontSize: '4rem',
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '2rem',
                            }}
                            fontWeight={700}
                        >
                            숙소
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className='mouse_hover'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                        height: '100%',
                        backgroundColor: 'background.paper',
                        borderRadius: '1rem',
                        padding: '1rem',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 5,
                    }}
                >
                    <Box>
                        <ConfirmationNumber
                            sx={{
                                fontSize: '4rem',
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '2rem',
                            }}
                            fontWeight={700}
                        >
                            입장료
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
