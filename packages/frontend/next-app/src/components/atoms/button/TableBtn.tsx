import { Box, PaletteColor, Typography, Palette } from '@mui/material';
import { ReactNode } from 'react';

export const RadiusBox = ({
    children,
    color,
}: {
    children: ReactNode;
    color: keyof Palette;
}) => {
    return (
        <Box
            sx={(theme) => ({
                borderRadius: '0.25rem',
                backgroundColor:
                    color === 'primary' ? 'primary.main' : 'background.default',
                color:
                    color === 'primary'
                        ? 'primary.contrastText'
                        : `${color}.main`,
                border: `1px solid ${
                    color === 'primary'
                        ? theme.palette.primary.main
                        : (
                              theme.palette[
                                  color as keyof typeof theme.palette
                              ] as PaletteColor
                          ).main
                }`,
                padding: '0.25rem 1rem',
            })}
        >
            <Typography variant='body2'>{children}</Typography>
        </Box>
    );
};
