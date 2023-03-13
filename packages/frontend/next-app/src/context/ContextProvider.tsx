import {SnackContextProvider} from 'next-app/src/context/SnackContext'

function ContextProvider({children}: {children: React.ReactNode}){
    return <>
        <SnackContextProvider>
        {children}
        </SnackContextProvider>
    </>
}

export default ContextProvider;
