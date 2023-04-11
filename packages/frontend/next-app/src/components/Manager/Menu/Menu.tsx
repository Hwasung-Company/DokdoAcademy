import {
    ConfirmationNumber,
    DirectionsBus,
    LocalHotel,
    Restaurant,
} from '@mui/icons-material';
import { alpha, Box, Paper, Typography } from '@mui/material';
import { useTempContext } from 'next-app/src/context/TempContext';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MenuTemplate = dynamic(() => import('../Layout/Menu/MenuTemplate'), {
    ssr: false,
});

const TourInformation = dynamic(() => import('./TourInformation'), {
    ssr: false,
});

export default function Menu() {
    const router = useRouter();
    const { selectBus, selectGroup } = useTempContext();
    const pushTo = (path: string) => () => {
        const { pathname } = router;
        router.push(pathname + '/menu' + path);
    };

    useEffect(() => {
        console.log(selectBus, selectGroup);
    }, []);

    return (
        <MenuTemplate>
            <TourInformation />
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
                    onClick={pushTo('/bus')}
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
                    onClick={pushTo('/restaurant')}
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
                    onClick={pushTo('/hotel')}
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
                <Paper
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
                    onClick={pushTo('/ticket')}
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
                </Paper>
            </Box>
        </MenuTemplate>
    );
}
