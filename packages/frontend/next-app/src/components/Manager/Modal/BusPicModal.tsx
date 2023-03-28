import { CameraAlt } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import ButtonWithIcon from '../../atoms/flex/ButtonWithIcon';
import MContainer from '../../atoms/modal/layout/MContainer';
import Title from '../../atoms/modal/text/Title';

export default function BusPicModal() {
    return (
        <MContainer>
            <Title text='버스 사진 등록' />
            <Box sx={{ mt: '1rem' }}>
                <Box
                    sx={{
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
