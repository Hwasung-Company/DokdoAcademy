import { Assignment, FormatListBulleted, Home } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';

export default function LeftNav() {
    return (
        <Box
            sx={{
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                width: '5rem',
                backgroundColor: 'background.default',
                boxShadow: '0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '2rem',
                }}
            >
                <ButtonContainer>
                    <IconContainer>
                        <Home />
                        <Typography variant='caption'>홈</Typography>
                    </IconContainer>
                </ButtonContainer>
                <ButtonContainer>
                    <IconContainer>
                        <FormatListBulleted />
                        <Typography
                            variant='caption'
                            sx={{ whiteSpace: 'nowrap' }}
                        >
                            일정리스트
                        </Typography>
                    </IconContainer>
                </ButtonContainer>
                <ButtonContainer>
                    <IconContainer>
                        <Assignment />
                        <Typography
                            variant='caption'
                            sx={{ whiteSpace: 'nowrap' }}
                        >
                            정산목록
                        </Typography>
                    </IconContainer>
                </ButtonContainer>
            </Box>
        </Box>
    );
}

const ButtonContainer = styled(Box)({
    height: '5rem',
    width: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const IconContainer = styled(IconButton)({
    width: '3rem',
    height: '3rem',
    display: 'flex',
    flexDirection: 'column',
});
