import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

type ScheduleTitleProps = {
    title: string;
    subtitle1: string;
    subtitle2?: string;
    count: number;
    onClick?: (event: any) => void;
};

const ScheduleTitle = ({
    title,
    subtitle1,
    subtitle2 = '',
    count,
    onClick,
}: ScheduleTitleProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        if (ref.current) {
            setScroll(ref.current.offsetTop);
        }
    }, [ref]);

    return (
        <Box
            ref={ref}
            component={Paper}
            onClick={() => {
                // rem to px
                // 1rem = 16px

                onClick && onClick(scroll - count * 3 * 16);
            }}
            sx={(theme) => ({
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                top: count * 3 + 'rem',
                position: 'sticky',
                boxShadow: 'none',
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `1px solid ${theme.palette.divider}`,
                zIndex: 999,
            })}
        >
            <Box
                display='flex'
                sx={{
                    backgroundColor: 'primary.main',
                    height: '100%',
                    width: '8rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <Typography variant='h6'>{title}</Typography>
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                }}
            >
                <Typography variant='body1'>{subtitle1}</Typography>
            </Box>
            <Box
                sx={{
                    marginRight: '1rem',
                    color: 'primary.main',
                }}
            >
                <Typography variant='body2' fontWeight={700}>
                    {subtitle2}
                </Typography>
            </Box>
        </Box>
    );
};

export default ScheduleTitle;
