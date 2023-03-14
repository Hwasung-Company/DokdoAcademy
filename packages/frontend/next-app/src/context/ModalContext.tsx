import {createContext, ReactElement, ReactNode, useContext, useMemo, useState} from 'react';
import MuiModal  from '@mui/material/Modal'
import {Box} from '@mui/material'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

type ModalContextType = {
    isOpen: boolean,
    open: () => void,
    Modal: ReactElement,
    setModal: (Component: ReactElement) => void,
}

export const ModalContext = createContext<ModalContextType>({
    isOpen: false,
    open: () => {},
    Modal: <></>,
    setModal: (Component: ReactElement) => {},
})

export function ModalContextProvider({children}: {children: ReactNode}){
    const [isOpen, setIsOpen] = useState(false)
    const [Modal, setModal] = useState<ReactElement>(<></>)
    const value = useMemo(()=>({
        isOpen, open: () => {setIsOpen(true)}, Modal, setModal
    }),[
        open, setIsOpen, Modal, setModal
    ])
    return <ModalContext.Provider value={value}>
        {children}
        <MuiModal
                    open={isOpen}
                    onClose={()=>{setIsOpen(false)}}
        >
            <Box sx={style}>
                {Modal}
            </Box>
        </MuiModal>
    </ModalContext.Provider>
}

export const useModalContext = () => {
    return useContext(ModalContext)
}
