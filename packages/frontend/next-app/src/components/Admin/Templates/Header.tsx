import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    Paper,
    Theme,
    Typography,
} from '@mui/material';
import {
    ArrowDropDown,
    DateRange,
    ReceiptLong,
    ViewList,
    Work,
} from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import { useRouter } from 'next/router';

function Header() {
    const theme = useTheme() as Theme;
    const router = useRouter();
    return (
        <Paper
            elevation={0}
            sx={{
                gridColumn: '1/13',
                gridRow: '1/2',
                display: 'flex',
                width: '100%',
                height: '5rem',
                alignItems: 'center',
                padding: '0 1rem',
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Box
                    id={'logo'}
                    sx={(theme) => {
                        return {
                            backgroundImage: 'url(/assets/images/Logo.svg)',
                            filter: 'invert(77%) sepia(61%) saturate(1469%) hue-rotate(201deg) brightness(101%) contrast(89%)',
                            width: '3rem',
                            height: '3rem',
                        };
                    }}
                />
                <Box sx={{ ml: '1rem' }}>
                    <Button
                        onClick={() => router.push('/admin/Dashboard')}
                        color={
                            theme.palette.mode === 'dark'
                                ? 'primary'
                                : 'primary'
                        }
                    >
                        <Typography variant={'h5'} sx={{ fontWeight: 600 }}>
                            독도 아카데미 운영 시스템
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Box sx={{}}>
                <Button
                    variant={'outlined'}
                    sx={{
                        borderRadius: '0.5rem',
                    }}
                    color={
                        theme.palette.mode === 'dark' ? 'warning' : 'success'
                    }
                >
                    <Typography variant={'body1'} sx={{ fontWeight: 600 }}>
                        2023년 1기 진행중
                    </Typography>
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <IconButton
                    color={theme.palette.mode === 'dark' ? 'info' : 'primary'}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <ViewList />
                    <Typography variant={'caption'} sx={{ fontWeight: 600 }}>
                        전체 일정
                    </Typography>
                </IconButton>
                <IconButton
                    color={theme.palette.mode === 'dark' ? 'info' : 'primary'}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <DateRange />
                    <Typography variant={'caption'} sx={{ fontWeight: 600 }}>
                        일정 달력
                    </Typography>
                </IconButton>
                <IconButton
                    color={theme.palette.mode === 'dark' ? 'info' : 'primary'}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <ReceiptLong />
                    <Typography variant={'caption'} sx={{ fontWeight: 600 }}>
                        정산 관리
                    </Typography>
                </IconButton>
                <IconButton
                    onClick={() => router.push('/admin/db')}
                    color={theme.palette.mode === 'dark' ? 'info' : 'primary'}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Work />
                    <Typography variant={'caption'} sx={{ fontWeight: 600 }}>
                        업체 관리
                    </Typography>
                </IconButton>
            </Box>
            <Divider
                orientation={'vertical'}
                sx={{ height: '3rem', ml: '1rem' }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', ml: '1rem' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ width: '2.5rem', height: '2.5rem' }} />
                    <Typography variant={'caption'} sx={{ fontWeight: 200 }}>
                        username
                    </Typography>
                </Box>
                <IconButton>
                    <ArrowDropDown />
                </IconButton>
            </Box>
        </Paper>
    );
}

export default Header;
