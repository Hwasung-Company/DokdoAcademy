import { SnackContextProvider } from 'next-app/src/context/SnackContext';
import { ModalContextProvider } from 'next-app/src/context/ModalContext';
import { ApolloProvider } from '@apollo/client';
import client from '../api/client';
import { LoginContextProvider } from './LoginContext';

function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ApolloProvider client={client}>
                <SnackContextProvider>
                    <LoginContextProvider>
                        <ModalContextProvider>{children}</ModalContextProvider>
                    </LoginContextProvider>
                </SnackContextProvider>
            </ApolloProvider>
        </>
    );
}

export default ContextProvider;
