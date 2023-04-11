import { CameraAlt } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
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

export default function HotelReceiptModal({ roomList, hotel }: any) {
    const { closeModal } = useModal();
    return (
        <MContainer>
            <Title text='숙박 영수증 등록' />
            <Box sx={{ mt: '1rem' }}>
                <MenuSectionItemGrid title='숙박 현황'>
                    <MenuSectionItem title='숙소명' text={hotel} />
                    <MenuSectionItem
                        title='숙박인원'
                        text={roomList.count.total + '명'}
                    />
                    <MenuSectionItem
                        title='사용객실(1인/2인/3인)'
                        text={`${roomList.count.single}/${roomList.count.twin}/${roomList.count.triple}`}
                    />
                    <MenuSectionItem
                        title='총 결제금액'
                        text={
                            (
                                roomList.count.single * 70000 + // 1인실
                                roomList.count.twin * 140000 + // 2인실
                                roomList.count.triple * 170000
                            ) // 3인실)
                                .toLocaleString() + '원'
                        }
                        subText={`${(
                            roomList.count.single * 70000
                        ).toLocaleString()}/${(
                            roomList.count.twin * 140000
                        ).toLocaleString()}/${(
                            roomList.count.triple * 170000
                        ).toLocaleString()}
                        `}
                    />
                </MenuSectionItemGrid>
                <MenuSectionItemGrid title='결제 영수증 등록'>
                    <></>
                </MenuSectionItemGrid>
                <Box
                    sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '20rem',
                            border: '1px solid #E5E5E5',
                            // borderRadius: '1rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='caption'>
                            사진을 등록해주세요.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            margin: '1rem 0',
                            height: '4rem',
                            width: '100%',
                        }}
                    >
                        <ButtonWithIcon
                            text='사진 등록'
                            icon={<CameraAlt />}
                            onClick={() => {
                                console.log('사진 등록');
                            }}
                            justifyContent='center'
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: '1rem',
                    }}
                >
                    <Button variant='outlined' onClick={closeModal}>
                        취소
                    </Button>
                    <Button variant='contained' sx={{ ml: '1rem' }}>
                        확인
                    </Button>
                </Box>
            </Box>
        </MContainer>
    );
}
