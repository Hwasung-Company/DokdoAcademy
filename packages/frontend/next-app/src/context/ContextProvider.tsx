import {SnackContextProvider} from 'next-app/src/context/SnackContext'
import {ModalContextProvider} from 'next-app/src/context/ModalContext'

function ContextProvider({children}: {children: React.ReactNode}){
    return <>
        <SnackContextProvider>
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </SnackContextProvider>
    </>
}

export default ContextProvider;
