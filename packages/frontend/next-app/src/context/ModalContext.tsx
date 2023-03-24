import {
    createContext,
    ReactElement,
    ReactNode,
    useContext,
    useMemo,
    useState,
} from 'react';
import MuiModal from '@mui/material/Modal';
import { Box } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

type ModalContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    Modal: ReactElement;
    setModal: (Component: ReactElement) => void;
};

export const ModalContext = createContext<ModalContextType>({
    isOpen: false,
    open: () => {},
    close: () => {},
    Modal: <></>,
    setModal: (Component: ReactElement) => {},
});

export function ModalContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [Modal, setModal] = useState<ReactElement>(<></>);
    const value = useMemo(
        () => ({
            isOpen,
            open: () => {
                setIsOpen(true);
            },
            Modal,
            setModal,
            close: () => {
                setIsOpen(false);
            },
        }),
        [setIsOpen, Modal, setModal],
    );
    return (
        <ModalContext.Provider value={value}>
            {children}
            <MuiModal
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
            >
                <Box sx={style}>{Modal}</Box>
            </MuiModal>
        </ModalContext.Provider>
    );
}

export const useModalContext = () => {
    return useContext(ModalContext);
};

/**
 *
 * @returns {object} {open, close, Modal, setModal}
 */
export const useModal = () => {
    const { open, close, setModal } = useModalContext();
    const openModal = () => {
        open();
    };
    const closeModal = () => {
        close();
    };
    return { openModal, closeModal, setModal };
};
