import { Alert, Slide, Snackbar } from '@mui/material';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type SnackContextType = {
    message: string;
    variant: 'success' | 'error' | 'warning' | 'info';
    open: boolean;
    close: () => void;
    openSnack: (
        message: string,
        variant: 'success' | 'error' | 'warning' | 'info',
    ) => void;
};

const SnackContext = createContext<SnackContextType>({
    message: '',
    variant: 'success',
    open: false,
    close: () => null,
    openSnack: (
        message: string,
        variant: 'success' | 'error' | 'warning' | 'info',
    ) => null,
});

export function SnackContextProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState<
        'success' | 'error' | 'warning' | 'info'
    >('success');
    const [open, setOpen] = useState(false);
    const close = () => {
        setMessage('');
        setOpen(false);
    };

    const openSnack = (
        message: string,
        variant: 'success' | 'error' | 'warning' | 'info',
    ) => {
        setMessage(message);
        setVariant(variant);
        setOpen(true);
    };

    const value = useMemo(
        () => ({
            message,
            variant,
            open,
            close,
            openSnack,
        }),
        [message, variant, open, close, openSnack],
    );

    return (
        <SnackContext.Provider value={value}>
            {children}
            <Snackbar
                open={value.open}
                autoHideDuration={1500}
                onClose={value.close}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                TransitionComponent={(props) => (
                    <Slide {...props} direction='up' />
                )}
            >
                <Alert
                    onClose={value.close}
                    severity={value.variant}
                    sx={{ width: '100%' }}
                >
                    {value.message}
                </Alert>
            </Snackbar>
        </SnackContext.Provider>
    );
}

export const useSnackContext = () => {
    return useContext(SnackContext);
};

export const useSnack = () => {
    const { openSnack } = useSnackContext();
    return openSnack;
};
