import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSnackContext } from './SnackContext';
import { Users } from '@common/entities/users/users.entity';
import { useLazyQuery } from '@apollo/client';

type LoginContextType = {
    isLogin: boolean | undefined;
    login: ({}: any) => Promise<any>;
    logout: () => void;
    user?: Users;
};

export const LoginContext = createContext<LoginContextType>({
    isLogin: undefined,
    login: ({}: any) => Promise.resolve(),
    logout: () => null,
});

const LOGIN = gql`
    mutation login($input: LoginInput!) {
        login(loginInput: $input) {
            access_token
            role
            ok
        }
    }
`;

const GET_USER = gql`
    query user {
        user {
            username
            role
            avatar
        }
    }
`;

export function LoginContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLogin, setIsLogin] = useState<boolean | undefined>();

    const [mutate, { data, loading, error }] = useMutation(LOGIN);

    const [
        getUser,
        { data: userData, loading: userLoading, error: userError, called },
    ] = useLazyQuery(GET_USER);

    const { openSnack } = useSnackContext();

    const router = useRouter();

    useEffect(() => {
        if (!data) {
            return;
        }

        if (data?.login?.ok) {
            localStorage.setItem(
                'hs-academy-auth-token',
                data.login.access_token,
            );

            setIsLogin(true);

            openSnack('로그인 성공', 'success');
            getUser();
        }
    }, [data]);

    useEffect(() => {
        if (userData?.user && isLogin) {
            setIsLogin(true);
            if (userData.user.role === 'ADMIN') {
                router.push('/admin');
                openSnack('관리자로 로그인 되었습니다.', 'success');
            }
        }
    }, [userLoading, called, isLogin]);

    useEffect(() => {
        if (localStorage.getItem('hs-academy-auth-token')) {
            getUser();
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    const user = useMemo(() => {
        if (userData?.user) {
            return userData.user;
        }
    }, [userData]);

    const value = useMemo(() => {
        return {
            isLogin,
            login: mutate,
            logout: () => {
                openSnack('로그아웃 되었습니다.', 'success');
                router.push('/');
                setIsLogin(false);
                localStorage.removeItem('hs-academy-auth-token');
            },
            user,
        };
    }, [isLogin, user]);

    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    );
}

export const useLoginContext = () => {
    return useContext(LoginContext);
};

export const useLogin = () => {
    const { isLogin, login, logout, user } = useLoginContext();

    return { isLogin, login, logout, user };
};
