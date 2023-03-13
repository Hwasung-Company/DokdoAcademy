import {createContext, ReactNode, useContext, useMemo, useState} from 'react'
import {Alert, Slide, Snackbar} from '@mui/material'

type SnackContextType = {
    message: string,
    variant: 'success' | 'error' | 'warning' | 'info',
    open: boolean,
    close: () => void,
    openSnack: (message: string, variant: 'success' | 'error' | 'warning' | 'info') => void,
}

const SnackContext = createContext<SnackContextType>({
    message: '',
    variant: 'success',
    open: false,
    close: () => {},
    openSnack: (message: string, variant: 'success' | 'error' | 'warning' | 'info') => {},
})

export function SnackContextProvider({children}: {children: ReactNode}){
    const [message, setMessage] = useState('')
    const [variant, setVariant] = useState<'success' | 'error' | 'warning' | 'info'>('success')
    const [open, setOpen] = useState(false)
    const close = () => {
        setOpen(false)
    }

    const openSnack = (message: string, variant: 'success' | 'error' | 'warning' | 'info') => {
        setMessage(message)
        setVariant(variant)
        setOpen(true)
    }

    const value = useMemo(()=>({
        message, variant, open, close, openSnack
    }),[message, variant, open, close, openSnack])

    return <SnackContext.Provider value={value}>
        {children}
        <Snackbar
                    open={open} autoHideDuration={1500} onClose={close}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                    TransitionComponent={(props) => <Slide {...props} direction="up" />}
        >
            <Alert onClose={close} severity={variant} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    </SnackContext.Provider>
}

export const useSnackContext = () => {
    return useContext(SnackContext)
}
