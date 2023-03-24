import { Box } from '@mui/material';

import dynamic from 'next/dynamic';
const LeftNav = dynamic(
    () => import('next-app/src/components/Manager/Layout/LeftNav'),
    { ssr: true },
);
const Schedule = dynamic(
    () => import('next-app/src/components/Manager/Schedule/Schedule'),
    { ssr: true },
);

const Menu = dynamic(
    () => import('next-app/src/components/Manager/Menu/Menu'),
    { ssr: true },
);

export default function ManagerHome() {
    return (
        <Box
            sx={{
                width: '100vw',
                minWidth: '1100px',
                height: '100vh',
                backgroundColor: 'background.default',
                display: 'grid',
                gridTemplateColumns: '5rem 1fr 1fr',
                gap: '1rem',
            }}
        >
            <LeftNav />
            <Schedule />
            <Menu />
        </Box>
    );
}
