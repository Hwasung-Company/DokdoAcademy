import { Box, Button, TextField, Typography } from '@mui/material';
import { createAccountMutation } from 'next-app/src/api/account/account';
import FlexFull from 'next-app/src/components/atoms/layout/FlexFull';
import MainLogo from 'next-app/src/components/atoms/logo/MainLogo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Signup() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [validation, setValidaton] = useState<string[]>([]);

    const { createAccount, data } = createAccountMutation();

    const validate = () => {
        const validation: string[] = [];
        if (username.length < 4) {
            validation.push('username');
        }

        // 8자 이상, 영문, 숫자 조합
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

        if (password.length < 4 || !passwordRegex.test(password)) {
            validation.push('password');
        }

        if (password !== passwordConfirm) {
            validation.push('passwordConfirm');
        }

        setValidaton(validation);
    };

    useEffect(() => {
        validate();
    }, [username, password, passwordConfirm]);

    const handleSignup = () => {
        createAccount({
            variables: {
                input: {
                    username,
                    password,
                },
            },
        }).then((res) => {
            res.data?.createAccount.ok && router.push('/');
        });
    };

    return (
        <FlexFull
            sx={{
                alignItems: 'center',
                padding: '1rem',
                gap: '1rem',
            }}
        >
            <Box
                onClick={() => {
                    router.push('/');
                }}
            >
                <MainLogo
                    sx={{
                        height: '6rem',
                        mt: '10rem',
                    }}
                />
            </Box>
            <Typography variant='h5'>회원가입</Typography>
            <FlexFull
                sx={{
                    alignItems: 'center',
                    width: '20rem',
                    gap: '1rem',
                }}
            >
                <TextField
                    fullWidth
                    value={username}
                    onChange={(e) => {
                        e.preventDefault();
                        setUsername(e.target.value);
                    }}
                    label='아이디'
                    error={validation.includes('username')}
                    helperText={
                        validation.includes('username')
                            ? '아이디는 4자 이상이어야 합니다.'
                            : '아이디는 4자 이상이어야 합니다.'
                    }
                />
                <TextField
                    type='password'
                    fullWidth
                    value={password}
                    onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }}
                    label='비밀번호'
                    error={validation.includes('password')}
                    helperText={
                        validation.includes('password')
                            ? '비밀번호는 8자 이상, 숫자를 포함해야 합니다.'
                            : '비밀번호는 8자 이상, 숫자를 포함해야 합니다.'
                    }
                />
                <TextField
                    type='password'
                    fullWidth
                    value={passwordConfirm}
                    onChange={(e) => {
                        e.preventDefault();
                        setPasswordConfirm(e.target.value);
                    }}
                    label='비밀번호 확인'
                    error={validation.includes('passwordConfirm')}
                    helperText={
                        validation.includes('passwordConfirm')
                            ? '비밀번호가 일치하지 않습니다.'
                            : '비밀번호가 일치합니다.'
                    }
                />
                <Button
                    fullWidth
                    variant='contained'
                    sx={{
                        height: '3rem',
                    }}
                    onClick={handleSignup}
                >
                    회원가입
                </Button>
            </FlexFull>
        </FlexFull>
    );
}
