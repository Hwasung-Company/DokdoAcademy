import {
    OptionUnstyled,
    optionUnstyledClasses,
    PopperUnstyled,
    SelectUnstyled,
    selectUnstyledClasses,
    SelectUnstyledProps,
} from '@mui/base';
import { Add, Remove } from '@mui/icons-material';
import {
    alpha,
    Autocomplete,
    Box,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    styled,
    TextField,
    Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

type MenuSectionProps = {
    title: string;
    children: React.ReactNode;
    backgroundColor?: string;
};

export default function MenuSection({
    children,
    title,
    backgroundColor,
}: MenuSectionProps) {
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
                backgroundColor: backgroundColor
                    ? backgroundColor
                    : alpha(theme.palette.primary.light, 0.1),
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
    button,
    height,
}: {
    children: React.ReactNode;
    title?: string;
    button?: React.ReactNode;
    height?: string;
}) {
    return (
        <Box
            sx={{
                display: 'grid',
                position: 'relative',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                // paddingTop: title ? '1.5rem' : '0',
                maxHeight: height ? height : 'default',
                overflowY: height ? 'scroll' : 'auto',
                width: '100%',
            }}
        >
            {(title || button) && (
                <Box
                    sx={{
                        // position: 'absolute',
                        // top: '-2rem',
                        // left: '0',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant='subtitle2' fontWeight={700}>
                        {title}
                    </Typography>
                    {button}
                </Box>
            )}
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

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledButton = styled('button')(
    ({ theme }) => `
    
    font-size: 1rem;
    box-sizing: border-box;
    height: auto;
    width: 100%;
    // padding: 0 1rem;
    border-radius: 0.25rem;
    text-align: left;
    line-height: 1.5;
    background: ${
        theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : theme.palette.background.paper
    };
    border: none;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;

    &:hover {
        background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &.${selectUnstyledClasses.expanded} {
        &::after {
            content: '⥮';
        }
    }

    &::after {
        content: '⥮';
        float: right;
    }
    `,
);

const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-size: 0.8rem;
    box-sizing: border-box;
    padding: 0.5rem;
    margin: 0;
    margin-right: 1rem;
    width: auto;
    border-radius: 0.25rem;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${
        theme.palette.mode === 'dark' ? grey[900] : grey[200]
    };
    `,
);

const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;

    &:last-of-type {
        border-bottom: none;
    }

    &.${optionUnstyledClasses.selected} {
        background-color: ${
            theme.palette.mode === 'dark' ? blue[900] : blue[100]
        };
        color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }

    &.${optionUnstyledClasses.highlighted} {
        background-color: ${
            theme.palette.mode === 'dark' ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }

    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
        background-color: ${
            theme.palette.mode === 'dark' ? blue[900] : blue[100]
        };
        color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }

    &.${optionUnstyledClasses.disabled} {
        color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:hover:not(.${optionUnstyledClasses.disabled}) {
        background-color: ${
            theme.palette.mode === 'dark' ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }

    &:not(:first-child) {
        margin-top: 0.5rem;
    }
    `,
);

const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
`;

// eslint-disable-next-line @typescript-eslint/ban-types
function CustomSelect<TValue extends {}, Multiple extends boolean = false>(
    props: SelectUnstyledProps<TValue, Multiple>,
) {
    const slots: SelectUnstyledProps<TValue, Multiple>['slots'] = {
        root: StyledButton,
        listbox: StyledListbox,
        popper: StyledPopper,
        ...props.slots,
    };

    return <SelectUnstyled {...props} slots={slots} />;
}

export function MenuSectionSelection<T>({
    title,
    subText,
    items,
    selected,
    onChange,
    displayKey,
    key,
}: {
    title: string;
    items: T[];
    selected: T;
    key?: keyof T;
    onChange?: (item: T) => void;
    displayKey?: keyof T;
    subText?: string | keyof T;
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
                    width: '100%',
                    '& > div': {
                        width: '100%',
                    },
                }}
            >
                <CustomSelect
                    value={selected}
                    onChange={(e, item) => {
                        onChange && onChange(item as T);
                    }}
                >
                    {items.map((item) => (
                        <StyledOption
                            value={item}
                            key={
                                (title +
                                    '-' +
                                    item[displayKey as keyof T]) as string
                            }
                        >
                            {item[displayKey as keyof T] as string}
                        </StyledOption>
                    ))}
                </CustomSelect>
            </Box>
            {subText && (
                <Typography
                    variant='body2'
                    sx={{
                        position: 'absolute',
                        bottom: '0.5rem',
                    }}
                >
                    {subText as string}
                </Typography>
            )}
        </Box>
    );
}

export function MenuSectionItemWithIncDec({
    title,
    value,
    subText,
    error,
    success,
    inc,
    dec,
}: {
    title: string;
    value: number;
    inc: () => void;
    dec: () => void;
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
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    gap: '0.5rem',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
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
                    {value}
                </Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        right: '0.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0rem',
                    }}
                >
                    <IconButton
                        onClick={() => {
                            inc();
                        }}
                        size='small'
                        disableTouchRipple
                    >
                        <Add color='success' />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            dec();
                        }}
                        size='small'
                        disableTouchRipple
                    >
                        <Remove color='error' />
                    </IconButton>
                </Box>
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
    span,
}: {
    title: string;
    onClick: () => void;
    icon: React.ReactNode;
    span?: number | string;
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
                gridColumn: span ? `span ${span}` : 'span 1',
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
            }}
            onClick={onClick}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                {icon}
                <Typography variant='h5' fontWeight={700}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
}
