import { alpha, Box, Paper, Typography } from '@mui/material';

type MenuSectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function MenuSection({ children, title }: MenuSectionProps) {
    return (
        <Box
            component={Paper}
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                width: '100%',
                backgroundColor: alpha(theme.palette.primary.light, 0.1),
                boxShadow: 'none',
            })}
        >
            <Box>
                <Typography variant='h6' fontWeight={700}>
                    {title}
                </Typography>
            </Box>
            {children}
        </Box>
    );
}

export function MenuSectionItemGrid({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string;
}) {
    return (
        <Box
            sx={{
                display: 'grid',
                position: 'relative',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginTop: title ? '1.5rem' : '0',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '-2rem',
                    left: '0',
                }}
            >
                <Typography variant='subtitle2' fontWeight={700}>
                    {title}
                </Typography>
            </Box>
            {children}
        </Box>
    );
}

export function MenuSectionItem({
    title,
    text,
    subText,
    error,
    success,
}: {
    title: string;
    text: string;
    subText?: string;
    error?: boolean;
    success?: boolean;
}) {
    return (
        <Box
            component={Paper}
            sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                padding: '0.5rem',
                boxShadow: 'none',
                borderRadius: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '5rem',
            }}
        >
            <Typography
                variant='caption'
                fontWeight={700}
                sx={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '0.5rem',
                }}
            >
                {title}
            </Typography>
            <Typography
                variant='h5'
                fontWeight={700}
                sx={{
                    color: error
                        ? 'error.main'
                        : success
                        ? 'success.main'
                        : 'text.primary',
                }}
            >
                {text}
            </Typography>
            {subText && (
                <Typography
                    variant='body2'
                    sx={{
                        position: 'absolute',
                        bottom: '0.5rem',
                    }}
                >
                    {subText}
                </Typography>
            )}
        </Box>
    );
}

export function MenuSectionItemWithIcon({
    title,
    text,
    subText,
    error,
    success,
    icon,
}: {
    title: string;
    text: string;
    subText?: string;
    error?: boolean;
    success?: boolean;
    icon: React.ReactNode;
}) {
    return (
        <Box
            component={Paper}
            sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                padding: '0.5rem',
                boxShadow: 'none',
                borderRadius: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '5rem',
            }}
        >
            <Typography
                variant='caption'
                fontWeight={700}
                sx={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '0.5rem',
                }}
            >
                {title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                {icon}
                <Typography
                    variant='h5'
                    fontWeight={700}
                    sx={{
                        color: error
                            ? 'error.main'
                            : success
                            ? 'success.main'
                            : 'text.primary',
                    }}
                >
                    {text}
                </Typography>
            </Box>
            {subText && (
                <Typography
                    variant='body2'
                    sx={{
                        position: 'absolute',
                        bottom: '0.5rem',
                    }}
                >
                    {subText}
                </Typography>
            )}
        </Box>
    );
}

/*
 * This component is used to render a button in the menu section.
 * It is used to render the "View all" button in the menu section.
 */
export function MenuSectionButton({
    title,
    onClick,
}: {
    title: string;
    onClick: () => void;
}) {
    return (
        <Box
            className='mouse_hover'
            component={Paper}
            sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                padding: '0.5rem',
                boxShadow: 'none',
                borderRadius: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '5rem',
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
            }}
            onClick={onClick}
        >
            <Typography variant='h5' fontWeight={700}>
                {title}
            </Typography>
        </Box>
    );
}

/*
 * This component is used to render a button in the menu section.
 * It is used to render the "View all" button in the menu section.
 */
export function MenuSectionButtonWithIcon({
    title,
    onClick,
    icon,
}: {
    title: string;
    onClick: () => void;
    icon: React.ReactNode;
}) {
    return (
        <Box
            component={Paper}
            sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                padding: '0.5rem',
                boxShadow: 'none',
                borderRadius: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '5rem',
            }}
            onClick={onClick}
        >
            <Typography
                variant='caption'
                fontWeight={700}
                sx={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '0.5rem',
                }}
            >
                {title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                {icon}
                <Typography
                    variant='h5'
                    fontWeight={700}
                    sx={{
                        color: 'text.primary',
                    }}
                >
                    View All
                </Typography>
            </Box>
        </Box>
    );
}
