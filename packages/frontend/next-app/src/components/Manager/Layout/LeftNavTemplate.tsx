import { Box } from '@mui/material';
import Contents from './Contents';
import LeftContents from './LeftContents';
import LeftNav from './LeftNav';

type LeftNavTemplateProps = {
    children: React.ReactNode;
};

export default function LeftNavTemplate({ children }: LeftNavTemplateProps) {
    return (
        <Box
            sx={{
                minWidth: '1100px',
                height: '100vh',
                overflowY: 'scroll',
                backgroundColor: 'background.default',
                display: 'grid',
                gridTemplateColumns: '5rem 1fr 1fr',
                gap: '1rem',
            }}
        >
            <Box sx={{ gridColumn: 'span 1' }} />
            <LeftNav />
            {children}
        </Box>
    );
}
