import { Call, CameraAlt } from '@mui/icons-material';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { useModal } from 'next-app/src/context/ModalContext';
import dynamic from 'next/dynamic';

const RestaurantReceiptModal = dynamic(
    () =>
        import('next-app/src/components/Manager/Modal/RestaurantReceiptModal'),
    { ssr: false },
);

export default function RestaurantCard() {
    const { setModal, openModal, closeModal } = useModal();

    const handleModal = () => {
        setModal(<RestaurantReceiptModal />);
        openModal();
    };

    return (
        <Box
            component={Paper}
            sx={{
                height: '8rem',
                display: 'flex',
                boxShadow: 'none',
                borderRadius: '1rem',
                gridColumn: 'span 2',
                padding: '0 1rem',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gridTemplateColumns: '1fr 2fr 2fr',
                    columnGap: '1rem',
                    width: '80%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                    }}
                >
                    <Typography variant='caption'>일정</Typography>
                    <Typography variant='h6'>1일차</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                    }}
                >
                    <Typography variant='caption'>식당</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Call fontSize='small' />
                        <Typography variant='h6'>비목식당</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                    }}
                >
                    <Typography variant='caption'>메뉴</Typography>
                    <Typography variant='h6'>엉겅퀴 해장국</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                    }}
                >
                    <Typography variant='caption'>일정</Typography>
                    <Typography variant='h6'>조식</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                    }}
                >
                    <Typography variant='caption'>예약시간</Typography>
                    <Typography variant='h6'>오전 08:00</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridColumn: 'span 1',
                    }}
                >
                    <Typography variant='caption'>단가</Typography>
                    <Typography variant='h6'>12,000원</Typography>
                </Box>
            </Box>
            <Box>
                <IconButton
                    disableRipple={true}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onClick={handleModal}
                >
                    <CameraAlt fontSize='large' />
                    <Typography variant='caption'>영수증 등록</Typography>
                </IconButton>
            </Box>
        </Box>
    );
}
