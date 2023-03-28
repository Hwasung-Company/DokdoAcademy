import { CameraAlt, Male } from '@mui/icons-material';
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

export default function HotelRoomListModal() {
    return (
        <MContainer>
            <Title text='숙소 열쇠 지급' />
            <Box sx={{ mt: '1rem' }}>
                <MenuSectionItemGrid title='숙소 현황'>
                    <MenuSectionItem title='1,2인실' text='3개' />
                    <MenuSectionItem title='3인실' text='1개' />
                </MenuSectionItemGrid>
                <MenuSectionItemGrid
                    title='숙소 열쇠 체크리스트'
                    button={<Button size='small'>전체 체크</Button>}
                >
                    <HotelRoom />
                </MenuSectionItemGrid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: '1rem',
                    }}
                >
                    <Button variant='outlined'>취소</Button>
                    <Button variant='contained' sx={{ ml: '1rem' }}>
                        확인
                    </Button>
                </Box>
            </Box>
        </MContainer>
    );
}

const HotelRoom = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'center',
                gridColumn: 'span 2',
                minHeight: '5rem',
                backgroundColor: 'background.paper',
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
                    302호
                </Typography>
                <Typography variant='body1' fontWeight={700}>
                    2인실
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
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1rem',
                    }}
                >
                    <Male />
                    <Typography variant='body1' fontWeight={700}>
                        홍길동
                    </Typography>
                    <Typography variant='body1' fontWeight={700}>
                        010-1234-5678
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1rem',
                    }}
                >
                    <Male />
                    <Typography variant='body1' fontWeight={700}>
                        홍길동
                    </Typography>
                    <Typography variant='body1' fontWeight={700}>
                        010-1234-5678
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1rem',
                    }}
                >
                    <Male />
                    <Typography variant='body1' fontWeight={700}>
                        홍길동
                    </Typography>
                    <Typography variant='body1' fontWeight={700}>
                        010-1234-5678
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '0rem', right: '0' }}>
                <Typography variant='caption' fontWeight={300}>
                    열쇠 지급
                </Typography>
                <Checkbox aria-label='test' />
            </Box>
        </Box>
    );
};
