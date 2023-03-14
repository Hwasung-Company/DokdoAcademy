import {alpha, Box, Button, IconButton, Paper, TextField, Theme, Typography} from '@mui/material'
import {Close} from '@mui/icons-material'
import {useTheme} from '@mui/styles'
import {useModalContext} from 'next-app/src/context/ModalContext'

function CreateBusCompany(){
    const theme = useTheme() as Theme;
    const {close} = useModalContext()
    return (
        <Box
            component={Paper}
            sx={{
                width: '30rem',
                minHeight: '30rem',
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                padding: '1rem',
                borderBottom: `1px solid ${theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2)}`,
                backgroundColor: theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.1),
            }}>
                <Box sx={{display:'flex',width:'100%', justifyContent: 'space-between', alignItems: 'center',}}>
                    <Typography variant={'h6'} sx={{fontWeight: 700}}>버스 업체 등록</Typography>
                </Box>
                <Typography variant={'caption'}>
                    Data Base Server에 버스 회사를 등록합니다. <br/> 등록한 업체는 세부 정보 페이지에서 수정할 수 있습니다.
                </Typography>
            </Box>
            <Box sx={{ padding: '1rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>회사명</Typography>
                        <TextField size={'small'} variant={'outlined'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>주소</Typography>
                        <TextField size={'small'} variant={'outlined'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>연락처</Typography>
                        <TextField size={'small'} variant={'outlined'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>휴대전화</Typography>
                        <TextField size={'small'} variant={'outlined'} />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                    <Button variant={'outlined'} onClick={close}>취소</Button>
                    <Button variant={'contained'}>등록</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default CreateBusCompany;
