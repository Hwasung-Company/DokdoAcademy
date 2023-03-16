import {SnackContextProvider} from 'next-app/src/context/SnackContext'
import {ModalContextProvider} from 'next-app/src/context/ModalContext'
import {ApolloProvider} from '@apollo/client'
import client from '../api/client';

function ContextProvider({children}: {children: React.ReactNode}){
    return <>
        <ApolloProvider client={client}>
            <SnackContextProvider>
                <ModalContextProvider>
                    {children}
                </ModalContextProvider>
            </SnackContextProvider>
        </ApolloProvider>
    </>
}

export default ContextProvider;
