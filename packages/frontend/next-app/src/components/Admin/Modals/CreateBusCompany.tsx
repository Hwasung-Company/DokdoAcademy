import {useEffect, useMemo, useState} from 'react'
import {alpha, Box, Button, IconButton, Paper, TextField, Theme, Typography} from '@mui/material'
import {Close} from '@mui/icons-material'
import {useTheme} from '@mui/styles'
import {useModalContext} from 'next-app/src/context/ModalContext'
import useCreateBusCompany from 'next-app/src/api/companies/useCreateBusCompany'
import {useSnackContext} from 'next-app/src/context/SnackContext'
import validate, {toContact} from 'next-app/src/validator'
import {CreateBusCompanyInput} from 'nest-app/dist/companies/dto/companies/bus/create/create-bus-company.dto'


function CreateBusCompany(){
    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [contact, setContact] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const theme = useTheme() as Theme;
    const {close} = useModalContext()
    const snack = useSnackContext();
    const mutation = useCreateBusCompany();

    const input = useMemo<CreateBusCompanyInput>(()=>{
        return {
            name,
            address,
            phone,
            contact,
            email,
        } as CreateBusCompanyInput
    },[name, address, phone, contact, email])

    const error = useMemo(()=>{
        return validate<CreateBusCompanyInput>(input, ['name', 'address', 'phone', 'contact'])
    }, [input]);

    const handleOnSubmit = () => {
        if(error.length>0){
            snack.openSnack('입력값을 확인해주세요.', 'error')
            return;
        }

        mutation.func({ variables: { input }, }).then(res=>{
            if(res.data.createBusCompany.ok){
                snack.openSnack(res.data.createBusCompany.message, 'success')
                close()
            }
        })
    }

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
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>업체 이름
                            <Typography component={'span'} sx={{ color: theme.palette.error.main }}>*</Typography>
                        </Typography>
                        <TextField
                            error={error.includes('name')}
                            name={'bus-company-name'} onChange={(e)=>{ setName(e.target.value) }} size={'small'} variant={'outlined'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>주소
                            <Typography component={'span'} sx={{ color: theme.palette.error.main }}>*</Typography>
                        </Typography>
                        <TextField
                            error={error.includes('address')}
                            name={'bus-company-address'} onChange={(e)=>{ setAddress(e.target.value) }} size={'small'} variant={'outlined'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>연락처
                            <Typography component={'span'} sx={{ color: theme.palette.error.main }}>*</Typography>
                        </Typography>
                        <TextField error={error.includes('contact')} name={'bus-company-contact'} onChange={(e)=>{ setContact(e.target.value) }} type={'tel'} size={'small'} variant={'outlined'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>휴대전화
                            <Typography component={'span'} sx={{ color: theme.palette.error.main }}>*</Typography>
                        </Typography>
                        <TextField
                            error={error.includes('phone')}
                            name={'bus-company-phone'} onChange={(e)=>{ setPhone(e.target.value) }} type={'tel'} size={'small'} variant={'outlined'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Typography ml={'0.2rem'} variant={'caption'} sx={{ fontWeight: 500 }}>email</Typography>
                        <TextField name={'bus-company-email'} onChange={(e)=>{ setEmail(e.target.value) }} type={'email'} size={'small'} variant={'outlined'} />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                    <Button variant={'outlined'} onClick={close}>취소</Button>
                    <Button variant={'contained'} onClick={handleOnSubmit}>등록</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default CreateBusCompany;
