import { CameraAlt, FormatListBulleted } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';
import { useModal } from 'next-app/src/context/ModalContext';
import HotelReceiptModal from '../Manager/Modal/HotelReceiptModal';
import HotelRoomListModal from '../Manager/Modal/HotelRoomListModal';
import ButtonWithIcon from '../atoms/flex/ButtonWithIcon';

export default function HotelCard({ hotel, roomList }: any) {
    const { setModal, openModal, closeModal } = useModal();

    const handleReceiptModal = () => {
        setModal(<HotelReceiptModal roomList={roomList} hotel={hotel} />);
        openModal();
    };

    const handleRoomListModal = () => {
        setModal(<HotelRoomListModal roomList={roomList} />);
        openModal();
    };

    return (
        <Box
            component={Paper}
            sx={{
                height: '9rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none',
                borderRadius: '1rem',
                gridColumn: 'span 2',
                padding: '1rem',
                gap: '1rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Item title='숙소명' text={hotel} />
                <Item title='숙박인원' text={roomList.count.total + ' 명'} />
                <Item
                    title='사용객실(1인/2인/3인)'
                    text={`${roomList.count.single} / ${roomList.count.twin} / ${roomList.count.triple}`}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '100%',
                    gap: '1rem',
                }}
            >
                <ButtonWithIcon
                    onClick={handleRoomListModal}
                    icon={<FormatListBulleted />}
                    text='객실 목록'
                />
                <ButtonWithIcon
                    onClick={handleReceiptModal}
                    icon={<CameraAlt />}
                    text='영수증 등록'
                />
            </Box>
        </Box>
    );
}

function Item({
    title,
    text,
    subText,
    error,
    success,
}: {
    title: string;
    text: string;
    subText?: string;
    error?: boolean;
    success?: boolean;
}) {
    return (
        <Box
            component={Paper}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <Typography
                variant='caption'
                fontWeight={700}
                sx={{
                    alignSelf: 'flex-start',
                }}
            >
                {title}
            </Typography>
            <Typography
                variant='h5'
                fontWeight={700}
                sx={{
                    color: error
                        ? 'error.main'
                        : success
                        ? 'success.main'
                        : 'text.primary',
                }}
            >
                {text}
            </Typography>
            {subText && (
                <Typography
                    variant='body2'
                    sx={{
                        position: 'absolute',
                        bottom: '0.5rem',
                    }}
                >
                    {subText}
                </Typography>
            )}
        </Box>
    );
}
