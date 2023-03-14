import {Box, Button, Divider, Paper, TextField, Typography} from '@mui/material'
import GridMain from '@dokdo-academy/component/dist/Layouts/GridMain'
import {useTheme} from '@mui/styles'
import {useEffect, useState} from 'react'
import {gql, useMutation} from '@apollo/client'
import  {useSnackContext} from 'next-app/src/context/SnackContext'
import { useRouter } from 'next/router'

const LOGIN = gql`
    mutation login($input:LoginInput!) {
        login(loginInput:$input){
            access_token
            ok
        }
    }
`

function Home(){
    const [login, {data, loading, error}] = useMutation(LOGIN)
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const {openSnack} = useSnackContext()
    const router = useRouter()
    useEffect(()=>{
        if(data?.login?.ok){
            openSnack('로그인 성공', 'success')
            router.push('/admin/Dashboard')
        }
    },[data])
    return (
        <GridMain>
            <Box gridRow={'3/12'} gridColumn={'1/7'} sx={{
                padding: '0 3rem',
                backgroundColor: 'background.paper',
            }} >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    height: '100%',
                    justifyContent: 'center',
                }}>
                        <TextField variant={'outlined'} label={'아이디'} onChange={e=>{
                            setId(e.target.value)
                        }} />
                        <TextField variant={'outlined'} label={'비밀번호'}
                            type={'password'}
                            onChange={e=>{ setPassword(e.target.value) }}
                        />
                        <Button
                            onClick={()=>{
                                login({
                                    variables: {
                                        input: {
                                            username:id,
                                            password,
                                        }
                                    }
                                }).catch(e=>{
                                    openSnack('아이디 또는 비밀번호가 틀렸습니다.', 'error')
                                })
                            }}
                        variant={'contained'} sx={{
                            height: '3rem',
                        }}>로그인</Button>
                </Box>
                {/*<Divider>*/}
                {/*    <Typography variant={'body1'} sx={{ padding: '0 1rem' }}>OR</Typography>*/}
                {/*</Divider>*/}
                {/*<Button variant={'contained'} sx={{*/}
                {/*    height: '3rem',*/}
                {/*    backgroundColor: '#FEE500',*/}
                {/*    color: 'black',*/}
                {/*    margin: '1rem 0',*/}
                {/*    width: '100%',*/}
                {/*    '&:hover': {*/}
                {/*        backgroundColor: '#FEE500',*/}
                {/*    }*/}
                {/*}}>*/}
                {/*    카카오 로그인*/}
                {/*</Button>*/}
            </Box>
            <Box gridRow={'3/12'} gridColumn={'8/13'}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                }}>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                    }}>
                        <Box
                            id={'logo'}
                            sx={(theme)=>{
                                return {
                                    backgroundImage: "url(/assets/images/Logo.svg)",
                                    filter: theme.palette.mode==='dark'? '': 'invert(1)',
                                    width: '6rem',
                                    height: '6rem',
                                }
                            }} />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '1rem'
                        }}>

                            <Typography variant={'h4'} sx={{fontWeight: 'bold'}}>
                                독도 아카데미
                            </Typography>
                            <Typography variant={'caption'} sx={{fontWeight: 200}}>
                                Dokdo Academy Education<br/>
                                Web Service
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </GridMain>
    )
}

export default Home;
