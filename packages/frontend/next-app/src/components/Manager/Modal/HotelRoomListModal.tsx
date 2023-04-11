import { CameraAlt, Female, Male } from '@mui/icons-material';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ButtonWithIcon from '../../atoms/flex/ButtonWithIcon';
import MContainer from '../../atoms/modal/layout/MContainer';
import Title from '../../atoms/modal/text/Title';
import MenuSection, {
    MenuSectionItem,
    MenuSectionItemGrid,
    MenuSectionItemWithIncDec,
    MenuSectionSelection,
} from '../Layout/Menu/MenuSection';
import { useModal } from 'next-app/src/context/ModalContext';

export default function HotelRoomListModal({ roomList }: any) {
    const { closeModal } = useModal();
    return (
        <MContainer>
            <Title text='객실 목록' />
            <Box sx={{ mt: '1rem' }}>
                <MenuSectionItemGrid title='숙소 현황'>
                    <MenuSectionItem
                        title='1,2인실'
                        text={
                            roomList.count.single + roomList.count.twin + '개'
                        }
                    />
                    <MenuSectionItem
                        title='3인실'
                        text={roomList.count.triple + '개'}
                    />
                </MenuSectionItemGrid>
                <MenuSectionItemGrid
                    title='숙소 열쇠 체크리스트'
                    button={<Button size='small'>전체 체크</Button>}
                    height='30rem'
                >
                    {Object.values(roomList).map((room: any) =>
                        !Array.isArray(room) ? null : <HotelRoom room={room} />,
                    )}
                </MenuSectionItemGrid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: '1rem',
                    }}
                >
                    {/* <Button variant='outlined'>취소</Button> */}
                    <Button
                        variant='contained'
                        sx={{ ml: '1rem' }}
                        onClick={closeModal}
                    >
                        확인
                    </Button>
                </Box>
            </Box>
        </MContainer>
    );
}

const HotelRoom = ({ room }: any) => {
    const [checked, setChecked] = useState(false);
    return (
        <Box
            sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'center',
                gridColumn: 'span 2',
                minHeight: '5rem',
                backgroundColor: checked ? 'success.main' : 'background.paper',
                borderRadius: '1rem',
                border: '1px solid #E5E5E5',
                padding: '1rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography variant='body1' fontWeight={700}>
                    {room[0].room}호
                </Typography>
                <Typography variant='body1' fontWeight={700}>
                    {room.length}인실
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '100%',
                    mt: '1rem',
                    gap: '0.3rem',
                }}
            >
                {room.map((person: any) => (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '1rem',
                        }}
                    >
                        {person.sexuality === '남' ? (
                            <Male fontSize='small' />
                        ) : (
                            <Female fontSize='small' />
                        )}
                        <Typography variant='body1' fontWeight={700}>
                            {person.name}
                        </Typography>
                        <Typography variant='body1' fontWeight={700}>
                            {person.contact}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={{ position: 'absolute', bottom: '0rem', right: '0' }}>
                <Typography variant='caption' fontWeight={300}>
                    열쇠 지급
                </Typography>
                <Checkbox
                    aria-label='test'
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </Box>
        </Box>
    );
};
