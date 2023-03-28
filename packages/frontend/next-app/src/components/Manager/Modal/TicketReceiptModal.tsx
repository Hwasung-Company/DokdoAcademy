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

export default function TicketReceiptModal() {
    return (
        <MContainer>
            <Title text='영수증 등록' />
            <Box sx={{ mt: '1rem' }}>
                <MenuSectionItemGrid>
                    <MenuSectionItem title='관광지' text='모노레일' />
                    <MenuSectionItemWithIncDec
                        title='인원'
                        value={0}
                        inc={() => {
                            /** */
                        }}
                        dec={() => {
                            /** */
                        }}
                    />
                    <MenuSectionItem title='금액' text='3,000원' />
                    <MenuSectionItem
                        title='총 결제금액'
                        text='590,000원'
                        subText='3,000 x 23'
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
                    <Button variant='outlined'>취소</Button>
                    <Button variant='contained' sx={{ ml: '1rem' }}>
                        확인
                    </Button>
                </Box>
            </Box>
        </MContainer>
    );
}
