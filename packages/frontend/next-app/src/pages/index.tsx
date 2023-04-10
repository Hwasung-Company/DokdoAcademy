import GridMain from '@dokdo-academy/component/dist/Layouts/GridMain';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useLogin } from 'next-app/src/context/LoginContext';
import { useSnackContext } from 'next-app/src/context/SnackContext';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MainLogo from '../components/atoms/logo/MainLogo';

function Home() {
    const { openSnack } = useSnackContext();
    const { login, isLogin } = useLogin();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    return (
        <GridMain>
            <Box
                gridRow={'3/12'}
                gridColumn={'1/13'}
                sx={{
                    padding: '0 3rem',
                    backgroundColor: 'background.paper',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <TextField
                        variant={'outlined'}
                        label={'아이디'}
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                    <TextField
                        variant={'outlined'}
                        label={'비밀번호'}
                        type={'password'}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <Button
                        onClick={() => {
                            login({
                                variables: {
                                    input: {
                                        username: id,
                                        password,
                                    },
                                },
                            }).catch((e) => {
                                openSnack(
                                    '아이디 또는 비밀번호가 틀렸습니다.',
                                    'error',
                                );
                            });
                        }}
                        variant={'contained'}
                        sx={{
                            height: '3rem',
                        }}
                    >
                        로그인
                    </Button>
                    <Button
                        onClick={() => {
                            router.push('/signup');
                        }}
                    >
                        회원가입
                    </Button>
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
            <Box gridRow={'2/5'} gridColumn={'1/13'}>
                <MainLogo />
            </Box>
        </GridMain>
    );
}

export default Home;
